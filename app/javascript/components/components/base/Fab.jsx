import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MDCRipple } from '@material/ripple';

import { uuid } from '../../../helpers';

class Fab extends React.Component {

    constructor(props) {
        super(props);

        this.state = { uuid: `fab-${uuid()}` }
    }

    componentDidMount() {
        MDCRipple.attachTo(document.querySelector(`#${this.state.uuid}`));
    }

    theme() {
        return _.isEmpty(this.props.themeOverride) ? this.props.theme : this.props.themeOverride;
    }

    themedClassName(className) {
        let theme = this.theme();

        return `${theme.classNamePrefix}${className}`
    }

    themedStyle() {
        let theme = this.theme();

        if (_.isEmpty(theme.styling) || _.isEmpty(theme.styling.fab)) {
            theme.styling = { fab: {} };
        }

        let styles = theme.styling.fab;
        styles = { ...styles, ...styles.custom };

        if (!_.isEmpty(this.props.customPanelTheme)) {
            styles = { ...styles, ...this.props.customPanelTheme };
        }

        return styles;
    }

    render() {
        let { className, style, condensed, children, theme, themeOverride, customPanelTheme, dispatch, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;
        let fabMiniClassName = condensed ? this.themedClassName('fab--mini') : '';

        return (
            <button id={this.state.uuid} className={`${this.themedClassName('fab')} ${fabMiniClassName} ${className}`} style={{  ...this.themedStyle(), ...style }} {...props}>
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
    themeOverride: PropTypes.object,
    customPanelTheme: PropTypes.object
};

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme,
    };
}

export default connect(mapStateToProps)(Fab);
