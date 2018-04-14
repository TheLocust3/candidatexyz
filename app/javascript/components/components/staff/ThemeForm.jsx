import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import Button from '../base/Button';
import TextField from '../base/TextField';
import { history } from '../../../constants';
import ThemeApi from '../../../api/theme-api';

import FormWrapper from '../forms/FormWrapper';
import ButtonThemeForm from './theme-forms/ButtonThemeForm';
import GlobalThemeForm from './theme-forms/GlobalThemeForm';

const COLORS = ['#00427c', '#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#DCE775', '#FF8A65', '#BA68C8'];

class ThemeForm extends React.Component {

    constructor(props) {
        super(props);

        if (_.isEmpty(this.props.theme)) {
            this.state = { name: '', description: '', classNamePrefix: 'mdc-', global: { backgroundColor: COLORS[0] }, button: {}, errors: {} };
        } else {
            this.state = {
                name: this.props.theme.name,
                classNamePrefix: 'mdc-',
                description: this.props.theme.description,
                global: _.isEmpty(this.props.theme.styling.global) ? {} : this.props.theme.styling.global,
                button: _.isEmpty(this.props.theme.styling.button) ? {} : this.props.theme.styling.button,
                update: true
            };
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        if (!this.state.update) {
            ThemeApi.create(this.theme().name, this.theme().description, this.theme().classNamePrefix,  this.theme().styling).then((theme) => {
                history.push('/staff/themes');
            }).catch((response) => {
                this.setState({
                    errors: response.responseJSON.errors
                });
            });
        } else {
            ThemeApi.update(this.props.theme.id, this.theme().name, this.theme().description, this.theme().classNamePrefix,  this.theme().styling).then((theme) => {
                history.push('/staff/themes');
            }).catch((response) => {
                this.setState({
                    errors: response.responseJSON.errors
                });
            });
        }
    }

    onSampleClick(event) {
        event.preventDefault();
    }

    updateButtonTheme(button) {
        this.setState({
            button: button
        });
    }

    updateGlobalTheme(global) {
        let button = this.state.button;
        if (_.isEmpty(button)) {
            button = global
        }

        this.setState({
            global: global,
            button: button
        });
    }

    theme() {
        return { name: this.state.name, description: this.state.description, classNamePrefix: this.state.classNamePrefix, styling: { global: this.state.global, button: this.state.button } };
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <TextField label='Theme Name' name='name' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '100%' }} defaultValue={this.state.name} /><br />
                <TextField label='Theme Description' name='description' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} defaultValue={this.state.description} /><br /><br />

                <div className='mdc-typography--display1'>Global</div><br />
                <GlobalThemeForm theme={this.theme()} colors={COLORS} updateTheme={(global) => this.updateGlobalTheme(global)} /><br />

                <div className='mdc-typography--display1'>Button</div><br />
                <ButtonThemeForm theme={this.theme()} colors={COLORS} updateTheme={(button) => this.updateButtonTheme(button)} /><br />

                <Button className='sign-up-form-button'>Save</Button>
            </FormWrapper>
        );
    }
}

ThemeForm.propTypes = {
    theme: PropTypes.object
};

export default ThemeForm;
