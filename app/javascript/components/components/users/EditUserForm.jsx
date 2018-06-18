import React from 'react';
import PropTypes from 'prop-types';

import Button from '../base/Button';
import TextField from '../base/TextField';
import { history } from '../../../constants';
import AuthApi from '../../../api/auth-api';

import FormWrapper from '../forms/FormWrapper';

export default class EditUserForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: this.props.user.email, firstName: this.props.user.first_name, lastName: this.props.user.last_name, errors: {} };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        AuthApi.editUser(this.state.email, this.state.password, this.state.passwordConfirmation, this.state.firstName, this.state.lastName).then( response => {
            history.push(this.props.redirectUrl);
        }).catch( response => {
            this.setState({
                errors: response.responseJSON.errors
            });
        });
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <TextField type='email' label='Email' name='email' onChange={(event) => this.handleChange(event)} defaultValue={this.state.email} style={{ width: '100%' }} /><br /><br />

                <TextField label='First name' name='firstName' onChange={(event) => this.handleChange(event)} defaultValue={this.state.firstName} style={{ width: '47.5%', marginRight: '5%' }} />
                <TextField label='Last name' name='lastName' onChange={(event) => this.handleChange(event)} defaultValue={this.state.lastName} style={{ width: '47.5%' }} /><br /><br />

                <TextField type='password' label='New Password' name='password' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} /><br /><br />

                <TextField type='password' label='Confirm New Password' name='passwordConfirmation' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} />

                <Button>Submit</Button><br /><br />
            </FormWrapper>
        );
    }
}

EditUserForm.propTypes = {
    redirectUrl: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
};
