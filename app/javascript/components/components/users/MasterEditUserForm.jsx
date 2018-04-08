import React from 'react';
import PropTypes from 'prop-types';

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
                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='email' id='email' className='mdc-text-field__input' name='email' onChange={this.handleChange.bind(this)} defaultValue={this.state.email} />
                    <label className='mdc-text-field__label' htmlFor='email'>Email</label>
                    <div className='mdc-line-ripple'></div>
                </div><br /><br />

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '47.5%', marginRight: '5%' }}>
                    <input type='text' id='first-name' className='mdc-text-field__input' name='firstName' onChange={this.handleChange.bind(this)} defaultValue={this.state.firstName} />
                    <label className='mdc-text-field__label' htmlFor='first-name'>First name</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '47.5%' }}>
                    <input type='text' id='last-name' className='mdc-text-field__input' name='lastName' onChange={this.handleChange.bind(this)} defaultValue={this.state.lastName} />
                    <label className='mdc-text-field__label' htmlFor='last-name'>Last name</label>
                    <div className='mdc-line-ripple'></div>
                </div><br />

                <div className='mdc-checkbox'>
                    <input type='checkbox' className='mdc-checkbox__native-control' onChange={this.handleAdminCheck.bind(this)} defaultChecked={this.state.admin} />
                    <div className='mdc-checkbox__background'>
                        <svg className='mdc-checkbox__checkmark' viewBox='0 0 24 24'>
                            <path className='mdc-checkbox__checkmark-path' fill='none' stroke='white' d='M1.73,12.91 8.1,19.28 22.79,4.59' />
                        </svg>

                        <div className='mdc-checkbox__mixedmark' />
                    </div>
                </div>

                <label className='checkboxLabel'>Admin</label>
            </div>
        );
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                {this.renderInputs()}<br />

                <button className='mdc-button mdc-button--raised'>Save</button><br /><br />
            </FormWrapper>
        );
    }
}

MasterEditUserForm.propTypes = {
    redirectUrl: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
};
