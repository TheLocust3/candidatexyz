import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { uuid } from '../../../helpers';

class BaseLink extends React.Component {

    constructor(props) {
        super(props);

        this.state = { uuid: `link-${uuid()}` }
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

        if (_.isEmpty(theme.styling) || _.isEmpty(theme.styling.link)) {
            theme.styling = { link: {} };
        }

        let styles = theme.styling.link;
        let customPanelTheme = _.isEmpty(this.props.customPanelTheme) ? {} : this.props.customPanelTheme;
        styles = { ...styles, ...styles.custom, ...customPanelTheme, ...customPanelTheme.custom };

        return styles;
    }

    renderGlobalLink() {
        let { className, style, to, children, theme, themeOverride, customPanelTheme, dispatch, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;

        return (
            <a id={this.state.uuid} className={`link ${className}`} href={to} style={{  ...this.themedStyle(), ...style }} {...props}>
                {children}
            </a>
        );
    }

    renderRelativeLink() {
        let { className, style, to, children, theme, themeOverride, customPanelTheme, dispatch, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;

        return (
            <Link id={this.state.uuid} className={`link ${className}`} to={to} style={{  ...this.themedStyle(), ...style }} {...props}>
                {children}
            </Link>
        );
    }

    render() {
        if (_.startsWith(this.props.to, 'http://') || _.startsWith(this.props.to, 'https://') || _.startsWith(this.props.to, 'www.')) { // TODO: Find better way to do this
            return this.renderGlobalLink();
        } else {
            return this.renderRelativeLink();
        }
    }
}

BaseLink.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    to: PropTypes.string,
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

export default connect(mapStateToProps)(BaseLink);
