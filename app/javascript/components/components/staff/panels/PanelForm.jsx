import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import PanelApi from '../../../../api/panel-api';
import { history } from '../../../../constants';

import FormWrapper from '../../forms/FormWrapper';
import Button from '../../base/Button';
import TextField from '../../base/TextField';

class PanelForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { errors: {} };
        if (_.isEmpty(this.props.panel)) {
            this.state.panel = { name: '', description: '', elements: {} };
        } else {
            this.state.name = this.props.panel.name;
            this.state.description = this.props.panel.description;
            this.state.elements = this.props.panel.elements;
            this.state.update = true;
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        if (!this.state.update) {
            PanelApi.create(this.state.name, this.state.description, this.state.elements).then((theme) => {
                history.push('/staff/panels');
            }).catch((response) => {
                this.setState({
                    errors: response.responseJSON.errors
                });
            });
        } else {
            PanelApi.update(this.state.name, this.state.description, this.state.elements).then((theme) => {
                history.push('/staff/panels');
            }).catch((response) => {
                this.setState({
                    errors: response.responseJSON.errors
                });
            });
        }
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <TextField label='Panel Name' name='name' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '100%' }} defaultValue={this.state.name} /><br />
                <TextField label='Panel Description' name='description' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} defaultValue={this.state.description} /><br /><br />

                <Button>Save</Button>
            </FormWrapper>
        );
    }
}

PanelForm.propTypes = {
    panel: PropTypes.object
};

export default PanelForm;
