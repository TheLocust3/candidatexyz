import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { MDCTextField } from '@material/textfield';

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

    render() {
        let { className, label, name, onChange, required, defaultValue, rows, cols, ...props } = this.props;

        return (
            <div id={this.state.uuid} className={`mdc-text-field mdc-text-field--textarea ${className}`} data-mdc-auto-init='MDCTextField' {...props}>
                <textarea type='text' name={name} className='mdc-text-field__input' onChange={onChange} rows={rows} cols={cols} required={required} />
                <label className='mdc-text-field__label'>{label}</label>
                <div className='mdc-line-ripple' />
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
    cols: PropTypes.number
};

export default TextArea;
