import _ from 'lodash'
import React from 'react';
import { MDCSelect } from '@material/select';

import Button from '../base/Button';
import TextField from '../base/TextField';
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

                <div className='mdc-text-field mdc-text-field--textarea' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <textarea type='text' id='body' name='body' className='mdc-text-field__input' rows={40} onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='body'>Body</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <Button style={{ float: 'right' }}>Send</Button>

                <MDCAutoInit />
            </FormWrapper>
        );
    }
}
