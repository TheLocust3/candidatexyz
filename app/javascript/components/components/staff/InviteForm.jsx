import _ from 'lodash'
import React from 'react';
import { MDCSelect } from '@material/select';

import Button from '../base/Button';
import MDCAutoInit from '../global/MDCAutoInit';
import { history } from '../../../constants';
import StaffApi from '../../../api/staff-api';

import FormWrapper from '../forms/FormWrapper';

export default class InviteForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: '', errors: {} };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        StaffApi.createToken(this.state.email).then(() => {
            history.push('/staff-management');
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
                    <input type='email' id='email' className='mdc-text-field__input' name='email' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-text-field__label' htmlFor='email'>Email</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <Button style={{ float: 'right' }}>Send</Button>

                <MDCAutoInit />
            </FormWrapper>
        );
    }
}
