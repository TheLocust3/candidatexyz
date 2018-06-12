import React from 'react';

import Button from '../base/Button';
import TextField from '../base/TextField';
import TextEditor from '../base/TextEditor';
import Header from '../base/Header';
import MDCAutoInit from '../global/MDCAutoInit';
import { history } from '../../../constants';
import { home } from '../../../features';
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

    handleEditorChange(body) {
        this.setState({
            body: body
        });
    }

    handleSubmit(event) {
        MailApi.sendToContacts(this.state.subject, this.state.body).then(() => {
            history.push(home);
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

                <TextEditor label='Body' onChange={(text) => { this.handleEditorChange(text) }} />
                <Header type='body2'>
                    Type <code>[FIRST_NAME]</code> and we will substitute it for each individual's first name (e.g. <code>[FIRST_NAME]</code> could turn into <code>John</code>).
                    This works the same with <code>[LAST_NAME]</code> and can be done in the body and the subject fields.
                </Header><br />

                <Button style={{ float: 'right' }}>Send</Button>

                <MDCAutoInit />
            </FormWrapper>
        );
    }
}
