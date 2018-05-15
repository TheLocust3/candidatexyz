import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { MDCTextField } from '@material/textfield';
import { connect } from 'react-redux';

import { uuid } from '../../../helpers';

class TextArea extends React.Component {

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

        if (_.isEmpty(theme.styling) || _.isEmpty(theme.styling.textArea)) {
            theme.styling = { textArea: {} };
        }

        let styles = theme.styling.textArea;
        let customPanelTheme = _.isEmpty(this.props.customPanelTheme) ? {} : this.props.customPanelTheme;
        styles = { ...styles, ...styles.custom, ...customPanelTheme, ...customPanelTheme.custom };

        return styles;
    }

    render() {
        let { className, label, name, onChange, required, defaultValue, rows, cols, theme, themeOverride, customPanelTheme, dispatch, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;
        let autoInit = this.theme().classNamePrefix != 'mdc-' ? {} : { 'data-mdc-auto-init': 'MDCTextField' };

        return (
            <div id={this.state.uuid} className={`${this.themedClassName('text-field')} ${this.themedClassName('text-field--textarea')} ${className}`} {...autoInit} {...props}>
                <textarea type='text' name={name} className={this.themedClassName('text-field__input')} onChange={onChange} rows={rows} cols={cols} required={required} />

                <label className={this.themedClassName('floating-label')} style={{ color: this.themedStyle().color, fontFamily: this.themedStyle().fontFamily }}>{label}</label><br />

                <div className={this.themedClassName('line-ripple')} />
            </div>
        );
    }
}

TextArea.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    defaultValue: PropTypes.string,
    rows: PropTypes.number,
    cols: PropTypes.number,
    themeOverride: PropTypes.object,
    customPanelTheme: PropTypes.object
};

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme,
    };
}

export default connect(mapStateToProps)(TextArea);
