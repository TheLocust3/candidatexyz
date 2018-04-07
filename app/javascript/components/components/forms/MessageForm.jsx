import _ from 'lodash'
import React from 'react';

import { history } from '../../../constants';
import MessageApi from '../../../api/message-api';

export default class MessageForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { firstName: '', lastName: '', email: '', subject: '', message: '', errors: [] };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        MessageApi.create(this.state.firstName, this.state.lastName, this.state.email, this.state.subject, this.state.message).then(() => {
            history.push('/home');
        }).catch((response) => {
            this.setState({
                errors: response.responseJSON.errors
            });
        });
    }

    renderErrors() {
        if (_.isEmpty(this.state.errors)) return;

        return (
            <div className='mdc-typography--caption'>
                {_.map(this.state.errors, (errorMessage, errorName) => {
                    return (
                        <div key={errorName}>
                            {_.capitalize(errorName)} {_.join(errorMessage, ', ')}
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        return (
            <form className='message-form' onSubmit={this.handleSubmit.bind(this)}>
                {this.renderErrors()}

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

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='message' id='message' className='mdc-text-field__input' name='message' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-text-field__label' htmlFor='message'>Message</label>
                    <div className='mdc-line-ripple'></div>
                </div><br /><br />

                <button className='mdc-button mdc-button--raised sign-up-form-button'>Submit</button>
            </form>
        );
    }
}
