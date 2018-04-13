import _ from 'lodash'
import React from 'react';

import Button from '../base/Button';
import TextField from '../base/TextField';
import { history } from '../../../constants';
import ThemeApi from '../../../api/theme-api';

import FormWrapper from '../forms/FormWrapper';

export default class ThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { name: '', description: '', global: {}, button: {}, errors: {} };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
    }

    renderGlobalStyling() {
        return (
            <div>
                Global Stylings
            </div>
        );
    }

    renderButtonStyling() {
        return (
            <div>
                Button Stylings
            </div>
        );
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <TextField label='Theme Name' name='name' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '100%' }} /><br />
                <TextField label='Theme Description' name='description' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} /><br /><br />

                <div className='mdc-typography--display1'>Global Styling</div><br />
                {this.renderGlobalStyling()}<br />

                <div className='mdc-typography--display1'>Button Styling</div><br />
                {this.renderButtonStyling()}<br />

                <Button className='sign-up-form-button'>Subscribe</Button>
            </FormWrapper>
        );
    }
}
