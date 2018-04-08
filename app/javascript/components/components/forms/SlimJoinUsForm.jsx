import _ from 'lodash'
import React from 'react';

import Button from '../base/Button';
import ContactApi from '../../../api/contact-api';

import FormWrapper from './FormWrapper';

export default class SlimJoinUsForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: '', zipCode: '', errors: {} };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        ContactApi.create(this.state.email, this.state.zipCode).then(() => {
            location.reload();
        }).catch((response) => {
            this.setState({
                errors: response.responseJSON.errors
            });
        });
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
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

                <Button className='sign-up-form-button'>Sign Up</Button>
            </FormWrapper>
        );
    }
}
