import React from 'react';
import PropTypes from 'prop-types';

import Button from '../base/Button';
import Checkbox from '../base/Checkbox';
import TextField from '../base/TextField';
import { history } from '../../../constants';
import StaffApi from '../../../api/staff-api';

import FormWrapper from '../forms/FormWrapper';

export default class MasterEditUserForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: this.props.user.email, firstName: this.props.user.first_name, lastName: this.props.user.last_name, admin: this.props.user.admin, errors: {} };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleAdminCheck(event) {
        this.setState({
            admin: !this.state.admin
        });
    }

    handleSubmit(event) {
        StaffApi.update(this.props.user.id, this.state.email, this.state.firstName, this.state.lastName, this.state.admin).then( response => {
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
                <TextField type='email' label='Email' name='email' onChange={(event) => this.handleChange(event)} defaultValue={this.state.email} style={{ width: '100%' }} /><br /><br />

                <TextField label='First name' name='firstName' onChange={(event) => this.handleChange(event)} defaultValue={this.state.firstName} style={{ width: '47.5%', marginRight: '5%' }} />
                <TextField label='Last name' name='lastName' onChange={(event) => this.handleChange(event)} defaultValue={this.state.lastName} style={{ width: '47.5%' }} /><br />

                <Checkbox label='Admin' onChange={this.handleAdminCheck.bind(this)} defaultChecked={this.state.admin} />
            </div>
        );
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                {this.renderInputs()}<br />

                <Button>Save</Button><br /><br />
            </FormWrapper>
        );
    }
}

MasterEditUserForm.propTypes = {
    redirectUrl: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
};
