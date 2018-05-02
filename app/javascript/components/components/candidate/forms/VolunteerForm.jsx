import _ from 'lodash'
import React from 'react';
import { MDCSelect } from '@material/select';

import Button from '../../base/Button';
import TextField from '../../base/TextField';
import Select from '../../base/Select';
import SelectItem from '../../base/SelectItem';
import ContentApi from '../../../../api/content-api';
import MDCAutoInit from '../../global/MDCAutoInit';
import { history, STATES } from '../../../../constants';
import VolunteerApi from '../../../../api/volunteer-api';

import FormWrapper from '../../forms/FormWrapper';

export default class VolunteerForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: '', phoneNumber: '', firstName: '', lastName: '', address: '', zipCode: '', city: '', state: '', helpBlurb: '', errors: {}, helpOptions: [], otherOpened: false };
    }

    componentDidMount() {
        ContentApi.get('voluneteerHelpOptions').then((response) => {
            let helpOptions = _.split(response.content, ',');
            helpOptions.push('Other');

            this.setState({
                helpOptions: helpOptions
            });
        });
    }

    handleStateChange(select) {
        this.setState({
            state: select.value
        });
    }

    handleHelpChange(select) {
        let otherOpened = false;
        if (select.value == 'Other') {
            otherOpened = true;
        }

        this.setState({
            helpBlurb: select.value,
            otherOpened: otherOpened
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        VolunteerApi.create(this.state.email, this.state.phoneNumber, this.state.firstName, this.state.lastName, this.state.address, this.state.zipCode, this.state.city, this.state.state, this.state.helpBlurb).then(() => {
            history.push('/home');
        }).catch((response) => {
            this.setState({
                errors: response.responseJSON.errors
            });
        });
    }

    renderStateDropdown() {
        return (
            <Select label='State' onChange={(select) => this.handleStateChange(select)} style={{ width: '30%' }}>
                {STATES.map((state) => {
                    return (
                        <SelectItem key={state}>
                            {state}
                        </SelectItem>
                    );
                })}
            </Select>
        )
    }

    renderHelpOptionsDropdown() {
        return (
            <Select label='How can you help?' onChange={(select) => this.handleHelpChange(select)} style={{ width: '30%' }}>
                {this.state.helpOptions.map((help) => {
                    return (
                        <SelectItem key={help}>
                            {help}
                        </SelectItem>
                    );
                })}
            </Select>
        )
    }

    renderOtherHelp() {
        if (!this.state.otherOpened) return;

        return (
            <div>
                <br />
                <TextField label='How can you help' name='helpBlurb' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} />
            </div>
        )
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <b>Contact Information</b><br />

                <TextField label='First name' name='firstName' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '47.5%', marginRight: '5%' }} />
                <TextField label='Last name' name='lastName' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '47.5%' }} /><br /><br />

                <TextField label='Address' name='address' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} /><br /><br />

                <TextField label='Zipcode' name='zipCode' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '30%', marginRight: '5%' }} />
                <TextField label='City' name='city' onChange={(event) => this.handleChange(event)} style={{ width: '30%', marginRight: '5%' }} />
                {this.renderStateDropdown()}

                <TextField type='email' label='Email' name='email' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '47.5%', marginRight: '5%' }} />
                <TextField label='Phone Number' name='phoneNumber' onChange={(event) => this.handleChange(event)} style={{ width: '47.5%' }} />

                {this.renderHelpOptionsDropdown()}<br />
                {this.renderOtherHelp()}

                <br />
                <div className='mdc-typography--caption'>By submitting your cell phone number you are agreeing to receive periodic text messages.</div>

                <Button className='sign-up-form-button'>Submit</Button>

                <MDCAutoInit />
            </FormWrapper>
        );
    }
}
