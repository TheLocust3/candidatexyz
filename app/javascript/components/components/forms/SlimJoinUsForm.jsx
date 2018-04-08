import _ from 'lodash'
import React from 'react';

import Button from '../base/Button';
import TextField from '../base/TextField';
import ContactApi from '../../../api/contact-api';

import FormWrapper from './FormWrapper';

export default class SlimJoinUsForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: '', zipCode: '', errors: {} };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        ContactApi.create(this.state.email, this.state.zipCode).then(() => {
            location.reload();
        }).catch((response) => {
            this.setState({
                errors: response.responseJSON.errors
            });
        });
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <TextField label='Zipcode' name='zipCode' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} /><br />
            
                <TextField type='email' label='Email' name='email' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} />

                <Button className='sign-up-form-button'>Sign Up</Button>
            </FormWrapper>
        );
    }
}
