import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { MDCTextField } from '@material/textfield';
import { connect } from 'react-redux';

class TextArea extends React.Component {

    constructor(props) {
        super(props);

        this.state = { defaultValue: props.defaultValue, uuid: `textfield-${Math.round(Math.random() * 1000000)}` };
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
        return _.isEmpty(this.props.themeOverride) ? this.props.theme : this.props.themeOverride;
    }

    themedClassName(className) {
        let theme = this.theme();

        return `${theme.classNamePrefix}${className}`
    }

    themedStyle() {
        let theme = this.theme();

        if (_.isEmpty(theme.styling) || _.isEmpty(theme.styling.textArea)) {
            return {};
        } else {
            return theme.styling.textArea;
        }
    }

    render() {
        let { className, label, name, onChange, required, defaultValue, rows, cols, theme, themeOverride, dispatch, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;

        return (
            <div id={this.state.uuid} className={`${this.themedClassName('text-field')} ${this.themedClassName('text-field--textarea')} ${className}`} data-mdc-auto-init='MDCTextField' {...props}>
                <textarea type='text' name={name} className={this.themedClassName('text-field__input')} onChange={onChange} rows={rows} cols={cols} required={required} />
                <label className={this.themedClassName('text-field__label')} style={{ color: this.themedStyle().color }}>{label}</label>
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
    themeOverride: PropTypes.object
};

function mapStateToProps(state) {
    return {
        theme: state.themes.globalTheme,
    };
}

export default connect(mapStateToProps)(TextArea);
