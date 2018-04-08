import React from 'react';
import PropTypes from 'prop-types';

import Button from '../base/Button';
import { history } from '../../../constants';
import AuthApi from '../../../api/auth-api';

import FormWrapper from '../forms/FormWrapper';

export default class ResetPasswordForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { password: '', passwordConfirmation: '', errors: {} };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        AuthApi.resetPassword(this.props.token, this.state.password, this.state.passwordConfirmation).then( response => {
            history.push(this.props.redirectUrl);
        }).catch( response => {
            this.setState({
                errors: response.responseJSON.errors
            });
        });
    }

    renderInputs() {
        return (
            <div>
                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='password' id='password' className='mdc-text-field__input' name='password' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='password'>Password</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='password' id='password-confirmation' className='mdc-text-field__input' name='passwordConfirmation' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='password-confirmation'>Confirm Password</label>
                    <div className='mdc-line-ripple'></div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                {this.renderInputs()}<br />

                <Button>Reset Password</Button><br />
            </FormWrapper>
        );
    }
}

ResetPasswordForm.propTypes = {
    redirectUrl: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired
};