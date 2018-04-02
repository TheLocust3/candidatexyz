import _ from 'lodash'
import React from 'react';
import { MDCSelect } from '@material/select';

import MDCAutoInit from '../global/MDCAutoInit';

import { history } from '../../../constants';
import MailApi from '../../../api/mail-api';

export default class VolunteerForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { subject: '', body: '', errors: [] };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        MailApi.sendToContacts(this.state.subject, this.state.body).then(() => {
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

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                {this.renderErrors()}

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='text' id='subject' className='mdc-text-field__input' name='subject' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-text-field__label' htmlFor='subject'>Subject</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <div className='mdc-text-field mdc-text-field--textarea' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <textarea type='text' id='body' name='body' className='mdc-text-field__input' rows={40} onChange={this.handleChange.bind(this)} />
                    <label className='mdc-text-field__label' htmlFor='body'>Body</label>
                    <div className='mdc-line-ripple'></div>
                </div>

                <button className='mdc-button mdc-button--raised' data-mdc-auto-init='MDCRipple' style={{ float: 'right' }}>Send</button>

                <MDCAutoInit />
            </form>
        );
    }
}
