import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectItem extends React.Component {

    theme() {
        return _.isEmpty(this.props.themeOverride) ? this.props.theme : this.props.themeOverride;
    }

    themedClassName(className) {
        return `${this.theme().classNamePrefix}${className}`
    }

    renderNone() {
        let { children, theme, dispatch, themeOverride, ...props } = this.props;

        return (
            <option value={children} {...props}>
                {children}
            </option>
        );        
    }

    renderMdc() {
        let { className, children, theme, dispatch, themeOverride, ...props } = this.props;
        className = _.isEmpty(className) ? '' : className;

        return (
            <li className={`${this.themedClassName('list-item')} ${className}`} role='option' tabIndex='0' {...props}>
                {children}
            </li>
        );
    }

    render() {
        if (this.theme().classNamePrefix == 'mdc-') {
            return this.renderMdc();
        } else {
            return this.renderNone();
        }
    }
}

SelectItem.propTypes = {
    className: PropTypes.string,
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

export default connect(mapStateToProps)(SelectItem);
