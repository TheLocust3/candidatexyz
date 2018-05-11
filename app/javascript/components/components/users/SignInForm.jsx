import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Header from '../base/Header';
import Button from '../base/Button';
import TextField from '../base/TextField';
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

    handleSubmit(event) {
        AuthApi.signIn(this.state.email, this.state.password, this.state.rememberMe).then( response => {
            window.location.href = '/staff';
        }).catch( response => {
            this.setState({
                error: response.responseJSON.error
            });
        });
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <Header type='display3'><b>Staff Login</b></Header><br />

                <TextField type='email' label='Email' name='email' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} />

                <TextField type='password' label='Password' name='password' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} />

                <Button>Submit</Button><br />
            </FormWrapper>
        );
    }
}

SignInForm.propTypes = {
    redirectUrl: PropTypes.string.isRequired
};
