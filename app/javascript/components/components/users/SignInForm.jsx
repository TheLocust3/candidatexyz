import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { history } from '../../../constants';
import AuthApi from '../../../api/auth-api';

import FormWrapper from '../forms/FormWrapper';

export default class SignInForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: null, password: null, error: '' };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleCheckbox(event) {
        this.setState({
            [event.target.name]: !this.state[event.target.name]
        });
    }

    handleSubmit(event) {
        AuthApi.signIn(this.state.email, this.state.password, this.state.rememberMe).then( response => {
            window.location.href = '/home';
        }).catch( response => {
            this.setState({
                error: response.responseJSON.error
            });
        });
    }

    renderInputs() {
        return (
            <div>
                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='email' id='email' className='mdc-text-field__input' name='email' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='email'>Email</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='password' id='password' className='mdc-text-field__input' name='password' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='password'>Password</label>
                    <div className='mdc-line-ripple'></div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <div className='mdc-typography--display3'><b>Staff Login</b></div><br />

                {this.renderInputs()}<br />

                <button className='mdc-button mdc-button--raised'>Submit</button><br />
            </FormWrapper>
        );
    }
}

SignInForm.propTypes = {
    redirectUrl: PropTypes.string.isRequired
};
