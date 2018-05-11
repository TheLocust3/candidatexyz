import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { uuid } from '../../../helpers';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = { uuid: `header-${uuid()}`, theme: _.cloneDeep(this.props.theme) };
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

        if (_.isEmpty(theme.styling) || _.isEmpty(theme.styling[this.props.type])) {
            theme.styling = { [this.props.type]: {} };
        }

        let styles = theme.styling[this.props.type];
        let customPanelTheme = _.isEmpty(this.props.customPanelTheme) ? {} : this.props.customPanelTheme;
        styles = { ...styles, ...styles.custom, ...customPanelTheme, ...customPanelTheme.custom };

        return styles;
    }

    render() {
        let { className, style, type, children, theme, themeOverride, customPanelTheme, dispatch, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;

        return (
            <div id={this.state.uuid} className={`mdc-typography--${type} ${className}`} style={{...this.themedStyle(), ...style}} {...props}>
                {children}
            </div>
        );
    }
}

Header.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string
    ]),
    themeOverride: PropTypes.object,
    customPanelTheme: PropTypes.object
};

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme
    };
}

export default connect(mapStateToProps)(Header);
