import _ from 'lodash'
import React from 'react';

import Button from '../base/Button';
import { history } from '../../../constants';
import MessageApi from '../../../api/message-api';

import FormWrapper from './FormWrapper';

export default class MessageForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { firstName: '', lastName: '', email: '', subject: '', message: '', errors: {} };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        MessageApi.create(this.state.firstName, this.state.lastName, this.state.email, this.state.subject, this.state.message).then(() => {
            history.push('/home');
        }).catch((response) => {
            this.setState({
                errors: response.responseJSON.errors
            });
        });
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors} className='content-bottom content-15'>
                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '47.5%', marginRight: '5%' }}>
                    <input type='text' id='first-name' className='mdc-text-field__input' name='firstName' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-text-field__label' htmlFor='first-name'>First name</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '47.5%' }}>
                    <input type='text' id='last-name' className='mdc-text-field__input' name='lastName' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-text-field__label' htmlFor='last-name'>Last name</label>
                    <div className='mdc-line-ripple'></div>
                </div><br /><br />

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='email' id='email' className='mdc-text-field__input' name='email' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-text-field__label' htmlFor='email'>Email</label>
                    <div className='mdc-line-ripple'></div>
                </div><br /><br />

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='text' id='subject' className='mdc-text-field__input' name='subject' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-text-field__label' htmlFor='subject'>Subject</label>
                    <div className='mdc-line-ripple'></div>
                </div><br /><br />

                <div id='text-content' className='mdc-text-field mdc-text-field--textarea' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <textarea type='text' id='message' className='mdc-text-field__input' name='message' onChange={this.handleChange.bind(this)} rows='20' />
                    <label className='mdc-text-field__label' htmlFor='message'>Message</label>
                    <div className='mdc-line-ripple'></div>
                </div><br /><br />

                <Button className='sign-up-form-button'>Submit</Button>
            </FormWrapper>
        );
    }
}
