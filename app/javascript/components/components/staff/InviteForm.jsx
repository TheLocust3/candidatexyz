import _ from 'lodash'
import React from 'react';
import { MDCSelect } from '@material/select';

import MDCAutoInit from '../global/MDCAutoInit';

import { history } from '../../../constants';
import StaffApi from '../../../api/staff-api';

export default class InviteForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: '', errors: [] };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        StaffApi.createToken(this.state.email).then(() => {
            history.push('/staff-management');
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

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                {this.renderErrors()}

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='email' id='email' className='mdc-text-field__input' name='email' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-text-field__label' htmlFor='email'>Email</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <button className='mdc-button mdc-button--raised' data-mdc-auto-init='MDCRipple' style={{ float: 'right' }}>Send</button>

                <MDCAutoInit />
            </form>
        );
    }
}
