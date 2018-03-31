import _ from 'lodash'
import React from 'react';
import { MDCSelect } from '@material/select';

import { history, STATES } from '../../../constants';
import VolunteerApi from '../../../api/volunteer-api';

export default class VolunteerForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: '', homeNumber: '', mobileNumber: '', firstName: '', lastName: '', address1: '', address2: '', zipCode: '', city: '', state: '', helpBlurb: '', errors: [] };
    }

    componentDidMount() {
        const select = new MDCSelect(document.querySelector('.mdc-select'));
        select.listen('MDCSelect:change', () => {
            this.setState({
                state: select.value
            });
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        VolunteerApi.create(this.state.email, this.state.homeNumber, this.state.mobileNumber, this.state.firstName, this.state.lastName, this.state.address1, this.state.address2, this.state.zipCode, this.state.city, this.state.state, this.state.helpBlurb).then(() => {
            history.push('/home');
        }).catch((response) => {
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

    renderStateDropdown() {
        return (
            <div className='mdc-select' role='listbox' style={{ width: '30%' }} data-mdc-auto-init='MDCSelect'>
                <div className='mdc-select__surface' tabIndex='0'>
                    <div className='mdc-select__label'>State</div>
                    <div className='mdc-select__selected-text' />
                    <div className='mdc-select__bottom-line' />
                </div>

                <div className='mdc-menu mdc-select__menu'>
                    <ul className='mdc-list mdc-menu__items'>
                        {STATES.map((state) => {
                            return (
                                <li key={state} className='mdc-list-item' role='option' tabIndex='0'>
                                    {state}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                {this.renderErrors()}

                <b>Contact Information</b><br />

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '47.5%', marginRight: '5%' }}>
                    <input type='text' id='first-name' className='mdc-text-field__input' name='firstName' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-text-field__label' htmlFor='first-name'>First name</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '47.5%' }}>
                    <input type='text' id='last-name' className='mdc-text-field__input' name='lastName' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-text-field__label' htmlFor='last-name'>Last name</label>
                    <div className='mdc-line-ripple'></div>
                </div><br /><br />

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '47.5%', marginRight: '5%' }}>
                    <input type='text' id='address1' className='mdc-text-field__input' name='address1' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='address1'>Address 1</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '47.5%' }}>
                    <input type='text' id='address2' className='mdc-text-field__input' name='address2' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='address2'>Address 2</label>
                    <div className='mdc-line-ripple'></div>
                </div><br /><br />


                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '30%', marginRight: '5%' }}>
                    <input type='text' id='zip-code' className='mdc-text-field__input' name='zipCode' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-text-field__label' htmlFor='zip-code'>Zip code</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '30%', marginRight: '5%' }}>
                    <input type='text' id='city' className='mdc-text-field__input' name='city' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='city'>City</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                {this.renderStateDropdown()}

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '30%', marginRight: '5%' }}>
                    <input type='email' id='email' className='mdc-text-field__input' name='email' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-text-field__label' htmlFor='email'>Email</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '30%', marginRight: '5%' }}>
                    <input type='text' id='home-number' className='mdc-text-field__input' name='homeNumber' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='home-number'>Home Phone</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '30%' }}>
                    <input type='text' id='mobile-number' className='mdc-text-field__input' name='mobileNumber' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='mobile-number'>Mobile Phone</label>
                    <div className='mdc-line-ripple'></div>
                </div><br /><br />

                <b>How can you help?</b><br />

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='text' id='help-blurb' className='mdc-text-field__input' name='helpBlurb' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='help-blurb'>How Can You Help</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <div className='mdc-typography--caption'>By submitting your cell phone number you are agreeing to receive periodic text messages.</div>

                <button className='mdc-button mdc-button--raised sign-up-form-button'data-mdc-auto-init='MDCRipple'>Submit</button>
            </form>
        );
    }
}
