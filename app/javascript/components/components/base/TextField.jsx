import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { MDCTextField } from '@material/textfield';
import { connect } from 'react-redux';

import { uuid } from '../../../helpers';

class TextField extends React.Component {

    constructor(props) {
        super(props);

        this.state = { defaultValue: props.defaultValue, uuid: `textfield-${uuid()}`, theme: _.cloneDeep(this.props.theme) };
    }

    componentDidMount() {
        if (_.isEmpty(this.props.defaultValue)) return;

        let textField = new MDCTextField(document.querySelector(`#${this.state.uuid}`));
        textField.value = this.state.defaultValue;
    }

    componentDidUpdate() {
        if (_.isEmpty(this.props.defaultValue)) return;

        if (this.state.defaultValue != this.props.defaultValue) {
            let textField = new MDCTextField(document.querySelector(`#${this.state.uuid}`));
            textField.value = this.props.defaultValue;

            this.setState({
                defaultValue: this.props.defaultValue
            });
        }
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

        if (_.isEmpty(theme.styling) || _.isEmpty(theme.styling.textField)) {
            theme.styling = { textField: {} };
        }

        let styles = theme.styling.textField;
        let customPanelTheme = _.isEmpty(this.props.customPanelTheme) ? {} : this.props.customPanelTheme;
        styles = { ...styles, ...styles.custom, ...customPanelTheme, ...customPanelTheme.custom };

        return styles;
    }

    render() {
        let { className, label, name, onChange, required, value, defaultValue, type, size, dense, theme, themeOverride, customPanelTheme, dispatch, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;
        let denseClassName = dense ? this.themedClassName('text-field--dense') : '';
        let autoInit = this.theme().classNamePrefix != 'mdc-' ? {} : { 'data-mdc-auto-init': 'MDCTextField' };

        type = _.isEmpty(type) ? 'text' : type;

        return (
            <div id={this.state.uuid} className={`${this.themedClassName('text-field')} ${denseClassName} ${className}`} {...autoInit} {...props}>
                <label className={this.themedClassName('text-field__label')} style={{ color: this.themedStyle().color, fontFamily: this.themedStyle().fontFamily }}>{label}</label><br />
                <input type={type} className={this.themedClassName('text-field__input')} name={name} onChange={onChange} value={value} size={size} required={required} />
                
                <div className={this.themedClassName('line-ripple')} />
            </div>
        );
    }
}

TextField.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.number,
    dense: PropTypes.bool,
    themeOverride: PropTypes.object,
    customPanelTheme: PropTypes.object
};

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme,
    };
}

export default connect(mapStateToProps)(TextField);
