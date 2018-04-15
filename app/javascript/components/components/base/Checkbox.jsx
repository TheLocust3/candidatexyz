import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Checkbox extends React.Component {

    theme() {
        return _.isEmpty(this.props.themeOverride) ? this.props.theme : this.props.themeOverride;
    }

    themedClassName(className) {
        let theme = this.theme();

        return `${theme.classNamePrefix}${className}`
    }

    themedStyle() {
        let theme = this.theme();

        if (_.isEmpty(theme.styling) || _.isEmpty(theme.styling.checkbox)) {
            return {};
        } else {
            return theme.styling.checkbox;
        }
    }

    renderNone() {
        if (this.theme().classNamePrefix == 'mdc-') return;

        let { className, label, onChange, defaultChecked, theme, dispatch, themeOverride, ...props } = this.props;
        className = _.isEmpty(className) ? '' : className;
        let themedStyle = this.themedStyle();

        return (
            <div className='none-checkbox' style={{ borderColor: themedStyle.borderColor }}>
                <input type='checkbox' className={`${this.themedClassName('checkbox')} ${className}`} onChange={onChange} defaultChecked={defaultChecked} {...props} />

                <label style={{ color: themedStyle.backgroundColor, fontFamily: themedStyle.fontFamily, fontSize: themedStyle.fontSize }}>{label}</label>
            </div>
        );
    }

    renderMdc() {
        if (this.theme().classNamePrefix != 'mdc-') return;

        let { className, label, onChange, defaultChecked, theme, dispatch, themeOverride, ...props } = this.props;
        className = _.isEmpty(className) ? '' : className;
        let themedStyle = this.themedStyle();

        return (
            <div>
                <div className={`${this.themedClassName('checkbox')} ${className}`} {...props}>
                    <input type='checkbox' className={this.themedClassName('checkbox__native-control')} onChange={onChange} defaultChecked={defaultChecked} />
                    <div className={this.themedClassName('checkbox__background')} style={{ borderColor: themedStyle.borderColor }}>
                        <svg className={this.themedClassName('checkbox__checkmark')} viewBox='0 0 24 24' style={{ backgroundColor: themedStyle.backgroundColor }}>
                            <path className={this.themedClassName('checkbox__checkmark-path')} fill='none' stroke='white' d='M1.73,12.91 8.1,19.28 22.79,4.59' />
                        </svg>

                        <div className={this.themedClassName('checkbox__mixedmark')} />
                    </div>
                </div>

                <label className='checkbox-label' style={{ fontFamily: themedStyle.fontFamily, fontSize: themedStyle.fontSize }}>{label}</label>
            </div>
        );
    }

    render() {
        let themedStyle = this.themedStyle();
        
        return (
            <div className='checkbox-wrapper'>
                {this.renderMdc()}
                {this.renderNone()}
            </div>
        );
    }
}

Checkbox.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    defaultChecked: PropTypes.bool,
    themeOverride: PropTypes.object
};

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme,
    };
}

export default connect(mapStateToProps)(Checkbox);

