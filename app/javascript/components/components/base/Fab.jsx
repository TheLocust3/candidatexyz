import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Fab extends React.Component {

    themedClassName(className) {
        return `${this.props.theme.classNamePrefix}${className}`
    }

    render() {
        let { className, condensed, children, theme, dispatch, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;
        let fabMiniClassName = condensed ? this.themedClassName('fab--mini') : '';

        return (
            <button className={`${this.themedClassName('fab')} ${fabMiniClassName} ${className}`} data-mdc-auto-init='MDCRipple' {...props}>
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

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme,
    };
}

export default connect(mapStateToProps)(Fab);
