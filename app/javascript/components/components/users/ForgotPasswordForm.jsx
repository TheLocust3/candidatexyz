import React from 'react';
import PropTypes from 'prop-types';

import Button from '../base/Button';
import { history } from '../../../constants';
import AuthApi from '../../../api/auth-api';

import FormWrapper from '../forms/FormWrapper';

export default class ForgotPasswordForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: null, errors: {} };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        AuthApi.forgotPassword(this.state.email).then( response => {
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
                    <input type='email' id='email' className='mdc-text-field__input' name='email' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='email'>Email</label>
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

ForgotPasswordForm.propTypes = {
    redirectUrl: PropTypes.string.isRequired
};