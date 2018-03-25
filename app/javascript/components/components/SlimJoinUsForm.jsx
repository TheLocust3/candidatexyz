import _ from 'lodash'
import React from 'react';

import ContactApi from '../../api/contact-api';

export default class JoinUsForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: '', zipCode: '', errors: [] };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        ContactApi.create(this.state.email, this.state.zipCode).then(() => {
            window.location.href = '/';
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
            <form onSubmit={this.handleSubmit.bind(this)}>
                {this.renderErrors()}

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='text' id='join-email' className='mdc-text-field__input' name='zipCode' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='join-email'>Zip Code</label>
                    <div className='mdc-line-ripple'></div>
                </div><br />

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='email' id='join-email' className='mdc-text-field__input' name='email' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='join-email'>Email</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <button className='mdc-button mdc-button--raised sign-up-form-button button'>Sign Up</button>
            </form>
        );
    }
}
