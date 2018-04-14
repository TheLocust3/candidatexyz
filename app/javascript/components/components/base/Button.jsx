import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MDCRipple } from '@material/ripple';

class Button extends React.Component {

    constructor(props) {
        super(props);

        this.state = { uuid: `button-${Math.round(Math.random() * 1000000)}` }
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

        if (_.isEmpty(theme.styling) || _.isEmpty(theme.styling.button)) {
            return {};
        } else {
            let buttonType = this.props.flat ? 'flat' : 'raised';
            return theme.styling.button[buttonType];
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
