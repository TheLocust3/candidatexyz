import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MDCRipple } from '@material/ripple';

class Button extends React.Component {

    constructor(props) {
        super(props);

        this.state = { uuid: `button-${Math.round(Math.random() * 1000000)}` }
        if (_.isEmpty(this.props.themeOverride)) {
            this.state.theme = this.props.theme;
        } else {
            this.state.theme = this.props.themeOverride;
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEmpty(nextProps.themeOverride)) {
            this.setState({
                theme: nextProps.themeOverride
            });
        }
    }

    componentDidMount() {
        MDCRipple.attachTo(document.querySelector(`#${this.state.uuid}`));
    }

    themedClassName(className) {
        return `${this.state.theme.classNamePrefix}${className}`
    }

    themedStyle() {
        if (_.isEmpty(this.state.theme.styling)) return {};

        if (_.isEmpty(this.state.theme.styling.button)) {
            return { backgroundColor: this.state.theme.styling.global.backgroundColor };
        } else {
            let buttonType = this.props.flat ? 'flat' : 'raised';
            return this.state.theme.styling.button[buttonType];
        }
    }

    render() {
        let { className, style, flat, condensed, children, theme, themeOverride, dispatch, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;
        let buttonDenseClassName = condensed ? this.themedClassName('button--dense') : '';
        let flatClassName = flat ? '' : this.themedClassName('button--raised');

        return (
            <button id={this.state.uuid} className={`${this.themedClassName('button')} ${flatClassName} button ${buttonDenseClassName} ${className}`} style={{...this.themedStyle(), ...style}} {...props}>
                {children}
            </button>
        );
    }
}

Button.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    flat: PropTypes.bool,
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
        theme: state.themes.globalTheme
    };
}

export default connect(mapStateToProps)(Button);
