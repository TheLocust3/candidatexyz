import _ from 'lodash'
import React from 'react';
import { MDCSelect } from '@material/select';

import Button from '../base/Button';
import TextField from '../base/TextField';
import TextArea from '../base/TextArea';
import MDCAutoInit from '../global/MDCAutoInit';
import { history } from '../../../constants';
import MailApi from '../../../api/mail-api';

import FormWrapper from '../forms/FormWrapper';

export default class MailForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { subject: '', body: '', errors: {} };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        MailApi.sendToContacts(this.state.subject, this.state.body).then(() => {
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
                <TextField label='Subject' name='subject' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '100%' }} />

                <TextArea label='Body' name='body' onChange={(event) => this.handleChange(event)} rows={40} style={{ width: '100%' }} />

                <Button style={{ float: 'right' }}>Send</Button>

                <MDCAutoInit />
            </FormWrapper>
        );
    }
}
