import _ from 'lodash'
import React from 'react';

import ContactApi from '../../../api/contact-api';

export default class JoinUsForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { firstName: '', lastName: '', zipCode: '', email: '', phoneNumber: '', errors: [] };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        ContactApi.create(this.state.email, this.state.zipCode, this.state.firstName, this.state.lastName, this.state.phoneNumber).then(() => {
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
                    <input type='text' id='zip-code' className='mdc-text-field__input' name='zipCode' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-text-field__label' htmlFor='zip-code'>Zip code</label>
                    <div className='mdc-line-ripple'></div>
                </div><br /><br />


                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '47.5%', marginRight: '5%' }}>
                    <input type='email' id='email' className='mdc-text-field__input' name='email' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-text-field__label' htmlFor='email'>Email</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '47.5%' }}>
                    <input type='text' id='phone-number' className='mdc-text-field__input' name='phoneNumber' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-text-field__label' htmlFor='phone-number'>Phone number</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <div className='mdc-typography--caption'>By submitting your cell phone number you are agreeing to receive periodic text messages.</div>

                <button className='mdc-button mdc-button--raised sign-up-form-button'data-mdc-auto-init='MDCRipple'>Subscribe</button>
            </form>
        );
    }
}
