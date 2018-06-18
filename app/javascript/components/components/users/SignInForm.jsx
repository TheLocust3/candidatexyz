import React from 'react';
import PropTypes from 'prop-types';

import Button from '../base/Button';
import TextField from '../base/TextField';
import AuthApi from '../../../api/auth-api';
import { history } from '../../../constants';

import FormWrapper from '../forms/FormWrapper';

export default class SignInForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: null, password: null, errors: {} };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        AuthApi.signIn(this.state.email, this.state.password, this.state.rememberMe).then((response) => {
            history.push('/staff');
        }).catch((response) => {
            this.setState({
                errors: { error: [response.responseJSON.error] }
            });
        });
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
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
