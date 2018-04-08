import React from 'react';
import PropTypes from 'prop-types';

class PanelWrapper extends React.Component {

    render() {
        let { children, className, height, ...props } = this.props;

        return (
            <div className={`panel ${className}`} style={{ height: height }} {...props}>
                {children}
            </div>
        );
    }
}

PanelWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired,
    className: PropTypes.string,
    height: PropTypes.string
};

export default PanelWrapper;
