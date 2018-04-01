import React from 'react';
import PropTypes from 'prop-types';

import { history } from '../../../constants';
import AuthApi from '../../../api/auth-api';

export default class EditUserForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: this.props.user.email, firstName: this.props.user.first_name, lastName: this.props.user.last_name, errors: [] };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        AuthApi.editUser(this.state.email, this.state.currentPassword, this.state.password, this.state.passwordConfirmation, this.state.firstName, this.state.lastName).then( response => {
            history.push(this.props.redirectUrl);
        }).catch( response => {
            this.setState({
                errors: response.responseJSON.errors
            });
        });
    }

    renderErrors() {
        if (_.isEmpty(this.state.errors)) return;

        return (
            <div className='mdc-typography--caption'>
                {_.map(this.state.errors, (errorMessage, errorName) => {
                    return (
                        <div key={errorName}>
                            {_.capitalize(errorName)} {_.join(errorMessage, ', ')}
                        </div>
                    );
                })}
            </div>
        )
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
                </div><br /><br />

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='password' id='current-password' className='mdc-text-field__input' name='currentPassword' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-text-field__label' htmlFor='current-password'>Current Password</label>
                    <div className='mdc-line-ripple'></div>
                </div><br /><br />

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='password' id='password' className='mdc-text-field__input' name='password' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='password'>New Password</label>
                    <div className='mdc-line-ripple'></div>
                </div><br /><br />

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='password' id='password-confirmation' className='mdc-text-field__input' name='passwordConfirmation' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='password-confirmation'>Confirm New Password</label>
                    <div className='mdc-line-ripple'></div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                {this.renderInputs()}

                <button className='mdc-button mdc-button--raised'>Submit</button><br /><br />

                {this.renderErrors()}
            </form>
        );
    }
}

EditUserForm.propTypes = {
    redirectUrl: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
};
