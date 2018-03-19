import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import AuthApi from '../../../api/auth-api';

export default class SignInForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: null, password: null, rememberMe: false, error: "" };
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
        event.preventDefault();

        AuthApi.signIn(this.state.email, this.state.password, this.state.rememberMe).then( response => {
            window.location.href = this.props.redirectUrl;
        }).catch( response => {
            this.setState({
                error: response.responseJSON.error
            });
        });
    }

    renderError() {
        if (_.isEmpty(this.state.error)) return;

        return (
            <div>
                {this.state.error}
            </div>
        )
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

                <div className='mdc-checkbox' data-mdc-auto-init='MDCCheckbox'>
                    <input type='checkbox' id='rememberMe' name="rememberMe" onChange={this.handleCheckbox.bind(this)} className='mdc-checkbox__native-control' />

                    <div className='mdc-checkbox__background'>
                        <svg className='mdc-checkbox__checkmark' viewBox='0 0 24 24'>
                            <path className='mdc-checkbox__checkmark-path' fill='none' stroke='white' d='M1.73,12.91 8.1,19.28 22.79,4.59' />
                        </svg>

                        <div className='mdc-checkbox__mixedmark' ></div>
                    </div>
                </div>

                <label htmlFor='rememberMe' className='checkboxLabel'>Remember Me</label>
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className='mdc-typography--display3'><b>Staff Login</b></div><br />

                {this.renderInputs()}<br />

                <button className='mdc-button mdc-button--raised'>Submit</button><br />

                {this.renderError()}
            </form>
        );
    }
}

SignInForm.propTypes = {
    redirectUrl: PropTypes.string.isRequired
};
