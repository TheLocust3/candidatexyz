import _ from 'lodash'
import React from 'react';
import PropTypes from 'prop-types';
import { MDCSelect } from '@material/select';

import Button from '../base/Button';
import TextField from '../base/TextField';
import MDCAutoInit from '../global/MDCAutoInit';
import { history } from '../../../constants';
import { home } from '../../../features';
import StaffApi from '../../../api/staff-api';

import FormWrapper from '../forms/FormWrapper';

export default class StaffSignUpForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: '', firstName: '', lastName: '', password: '', passwordConfirmation: '', errors: {} };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        StaffApi.create(this.props.token, this.state.email, this.state.firstName, this.state.lastName, this.state.password, this.state.passwordConfirmation).then(() => {
            history.push(home);
        }).catch((response) => {
            this.setState({
                errors: response.responseJSON.errors
            });
        });
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <TextField type='email' label='Email' name='email' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '100%' }} /><br /><br />

                <TextField label='First Name' name='firstName' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '47.5%', marginRight: '5%' }} />
                <TextField label='Last Name' name='lastName' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '47.5%' }} /><br /><br />

                <TextField type='password' label='Password' name='password' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '100%' }} /><br /><br />

                <TextField type='password' label='Confirm Password' name='passwordConfirmation' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '100%' }} /><br /><br />

                <Button style={{ float: 'right' }}>Submit</Button>

                <MDCAutoInit />
            </FormWrapper>
        );
    }
}

StaffSignUpForm.propTypes = {
    token: PropTypes.string.isRequired
};
