import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectItem extends React.Component {

    themedClassName(className) {
        return `${this.props.theme.classNamePrefix}${className}`
    }

    render() {
        let { className, children, theme, dispatch, ...props } = this.props;

        return (
            <li className={`${this.themedClassName('list-item')} ${className}`} role='option' tabIndex='0' {...props}>
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

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme,
    };
}

export default connect(mapStateToProps)(SelectItem);
