import React from 'react';
import PropTypes from 'prop-types';

class Fab extends React.Component {

    render() {
        let { className, condensed, children, ...props } = this.props;

        let fabMiniClassName = condensed ? 'mdc-fab--mini' : '';

        return (
            <button className={`mdc-fab ${fabMiniClassName} ${className}`} data-mdc-auto-init='MDCRipple' {...props}>
                {children}
            </button>
        );
    }
}

Fab.propTypes = {
    className: PropTypes.string,
    condensed: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
};

export default Fab;
