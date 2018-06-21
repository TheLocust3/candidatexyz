import _ from 'lodash'
import React from 'react';
import { MDCSelect } from '@material/select';
import { StaffApi } from 'candidatexyz-common-js';

import Button from '../base/Button';
import TextField from '../base/TextField';
import MDCAutoInit from '../global/MDCAutoInit';
import { history } from '../../../constants';

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
            history.push('/staff/staff-management');
        }).catch((response) => {
            this.setState({
                errors: response.responseJSON.errors
            });
        });
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <TextField type='email' label='Email' name='email' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '100%' }} />

                <Button style={{ float: 'right' }}>Send</Button>

                <MDCAutoInit />
            </FormWrapper>
        );
    }
}
