import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { MDCTextField } from '@material/textfield';

class TextField extends React.Component {

    constructor(props) {
        super(props);

        this.state = { defaultValue: props.defaultValue, uuid: `textfield-${Math.round(Math.random() * 1000000)}` }; // TODO: find better way to do this
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
        let { className, label, name, onChange, required, defaultValue, type, size, dense, ...props } = this.props;
        let denseClassName = dense ? 'mdc-text-field--dense' : '';

        type = _.isEmpty(type) ? 'text' : type;

        return (
            <div id={this.state.uuid} className={`mdc-text-field ${denseClassName} ${className}`} data-mdc-auto-init='MDCTextField' {...props}>
                <input type={type} className='mdc-text-field__input' name={name} onChange={onChange} size={size} required={required} />
                <label className='mdc-text-field__label'>{label}</label>
                <div className='mdc-line-ripple' />
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
    type: PropTypes.string,
    size: PropTypes.number,
    dense: PropTypes.bool
};

export default TextField;
