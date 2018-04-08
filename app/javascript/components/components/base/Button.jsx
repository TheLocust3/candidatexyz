import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {

    render() {
        let { className, fab, condensed, children, ...props } = this.props;

        let buttonClassName = fab ? 'mdc-fab' : 'mdc-button mdc-button--raised button';
        let fabMiniClassName = fab && condensed ? 'mdc-fab--mini' : '';
        let buttonDenseClassName = !fab && condensed ? 'mdc-button--dense' : '';

        return (
            <button className={`${buttonClassName} ${fabMiniClassName} ${buttonDenseClassName} ${className}`} data-mdc-auto-init='MDCRipple' {...props}>
                {children}
            </button>
        );
    }
}

Button.propTypes = {
    className: PropTypes.string,
    fab: PropTypes.bool,
    condensed: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
};

export default Button;
