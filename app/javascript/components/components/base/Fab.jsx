import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Fab extends React.Component {

    constructor(props) {
        super(props);

        if (_.isEmpty(this.props.themeOverride)) {
            this.state = { theme: this.props.theme };
        } else {
            this.state = { theme: this.props.themeOverride };
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEmpty(nextProps.themeOverride)) {
            this.setState({
                theme: nextProps.themeOverride
            });
        }
    }

    themedClassName(className) {
        return `${this.props.theme.classNamePrefix}${className}`
    }

    themedStyle() {
        if (_.isEmpty(this.state.theme.styling)) return {};

        if (_.isEmpty(this.state.theme.styling.fab)) {
            return { backgroundColor: this.state.theme.styling.global.backgroundColor };
        } else {
            return this.state.theme.styling.fab;
        }
    }

    render() {
        let { className, style, condensed, children, theme, themeOverride, dispatch, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;
        let fabMiniClassName = condensed ? this.themedClassName('fab--mini') : '';

        return (
            <button className={`${this.themedClassName('fab')} ${fabMiniClassName} ${className}`} data-mdc-auto-init='MDCRipple' style={{  ...this.themedStyle(), ...style }} {...props}>
                {children}
            </button>
        );
    }
}

Fab.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    condensed: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
    themeOverride: PropTypes.object
};

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme,
    };
}

export default connect(mapStateToProps)(Fab);
