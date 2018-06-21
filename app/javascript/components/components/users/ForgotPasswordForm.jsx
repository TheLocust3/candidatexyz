import React from 'react';
import PropTypes from 'prop-types';
import { AuthApi } from 'candidatexyz-common-js';

import Button from '../base/Button';
import TextField from '../base/TextField';
import { history } from '../../../constants';

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
                errors: { error: response.data.errors }
            });
        });
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <TextField type='email' label='Email' name='email' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '100%' }} /><br /><br />

                <Button>Reset Password</Button><br />
            </FormWrapper>
        );
    }
}

ForgotPasswordForm.propTypes = {
    redirectUrl: PropTypes.string.isRequired
};