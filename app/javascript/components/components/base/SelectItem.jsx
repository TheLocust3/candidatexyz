import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = { theme: _.cloneDeep(this.props.theme) };
    }

    theme() {
        return _.isEmpty(this.props.themeOverride) ? this.state.theme : this.props.themeOverride;
    }

    themedClassName(className) {
        return `${this.theme().classNamePrefix}${className}`
    }

    themedStyle() {
        let theme = this.theme();

        if (_.isEmpty(theme.styling) || _.isEmpty(theme.styling.select)) {
            theme.styling = { select: {} };
        }

        let styles = theme.styling.select;
        let customPanelTheme = _.isEmpty(this.props.customPanelTheme) ? {} : this.props.customPanelTheme;
        styles = { ...styles, ...styles.custom, ...customPanelTheme, ...customPanelTheme.custom };

        return styles;
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
        let { className, children, theme, dispatch, themeOverride, customPanelTheme, ...props } = this.props;
        className = _.isEmpty(className) ? '' : className;

        return (
            <li className={`${this.themedClassName('list-item')} ${className}`} role='option' tabIndex='0' style={{ fontFamily: this.themedStyle().fontFamily }} {...props}>
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
    themeOverride: PropTypes.object,
    customPanelTheme: PropTypes.object
};

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme,
    };
}

export default connect(mapStateToProps)(SelectItem);
