import _ from 'lodash'
import React from 'react';
import PropTypes from 'prop-types';
import { MDCSelect } from '@material/select';

import MDCAutoInit from '../global/MDCAutoInit';

import { history } from '../../../constants';
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
            history.push('/home');
        }).catch((response) => {
            this.setState({
                errors: response.responseJSON.errors
            });
        });
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
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
                    <input type='password' id='password' className='mdc-text-field__input' name='password' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='password'>Password</label>
                    <div className='mdc-line-ripple'></div>
                </div><br /><br />

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='password' id='password-confirmation' className='mdc-text-field__input' name='passwordConfirmation' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='password-confirmation'>Confirm Password</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <button className='mdc-button mdc-button--raised' data-mdc-auto-init='MDCRipple' style={{ float: 'right' }}>Submit</button>

                <MDCAutoInit />
            </FormWrapper>
        );
    }
}

StaffSignUpForm.propTypes = {
    token: PropTypes.string.isRequired
};
