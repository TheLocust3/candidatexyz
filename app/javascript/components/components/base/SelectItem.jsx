import React from 'react';
import PropTypes from 'prop-types';

class SelectItem extends React.Component {

    render() {
        let { className, children, ...props } = this.props;

        return (
            <li className={`mdc-list-item ${className}`} role='option' tabIndex='0' {...props}>
                {children}
            </li>
        );
    }
}

SelectItem.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
};

export default SelectItem;
