import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { uuid } from '../../../helpers';

class BaseLink extends React.Component {

    constructor(props) {
        super(props);

        this.state = { uuid: `link-${uuid()}`, theme: _.cloneDeep(this.props.theme) };
    }

    theme() {
        return _.isEmpty(this.props.themeOverride) ? this.state.theme : this.props.themeOverride;
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
        let { className, style, to, children, unstyled, noDecoration, theme, themeOverride, customPanelTheme, dispatch, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;
        className = unstyled ? className : `link ${className}`;
        let fullStyle = unstyled ? style : { ...this.themedStyle(), ...style };
        fullStyle = noDecoration ? { ...fullStyle, textDecoration: 'none' } : fullStyle;

        return (
            <a id={this.state.uuid} className={className} href={to} style={fullStyle} {...props}>
                {children}
            </a>
        );
    }

    renderRelativeLink() {
        let { className, style, to, children, unstyled, noDecoration, theme, themeOverride, customPanelTheme, dispatch, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;
        className = unstyled ? className : `link ${className}`;
        let fullStyle = unstyled ? style : { ...this.themedStyle(), ...style };
        fullStyle = noDecoration ? { ...fullStyle, textDecoration: 'none' } : fullStyle;

        return (
            <Link id={this.state.uuid} className={className} to={to} style={fullStyle} {...props}>
                {children}
            </Link>
        );
    }

    render() {
        if (_.startsWith(this.props.to, 'http://') || _.startsWith(this.props.to, 'https://') || _.startsWith(this.props.to, 'www.') || _.isEmpty(this.props.to)) { // TODO: Find better way to do this
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
    ]),
    unstyled: PropTypes.bool,
    noDecoration: PropTypes.bool,
    themeOverride: PropTypes.object,
    customPanelTheme: PropTypes.object
};

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme
    };
}

export default connect(mapStateToProps)(BaseLink);
