import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Button extends React.Component {

    render() {
        let { className, condensed, children, theme, dispatch, ...props } = this.props;

        let buttonDenseClassName = condensed ? 'mdc-button--dense' : '';

        return (
            <button className={`mdc-button mdc-button--raised button ${buttonDenseClassName} ${className}`} data-mdc-auto-init='MDCRipple' {...props}>
                {children}
            </button>
        );
    }
}

Button.propTypes = {
    className: PropTypes.string,
    condensed: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string
    ]).isRequired
};

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme,
    };
}

export default connect(mapStateToProps)(Button);
