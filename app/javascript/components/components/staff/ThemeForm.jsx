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
import GlobalThemeForm from './theme-forms/GlobalThemeForm';
import ButtonThemeForm from './theme-forms/ButtonThemeForm';
import CheckboxThemeForm from './theme-forms/CheckboxThemeForm';
import FabThemeForm from './theme-forms/FabThemeForm';
import TextFieldThemeForm from './theme-forms/TextFieldThemeForm';
import TextAreaThemeForm from './theme-forms/TextAreaThemeForm';

const COLORS = ['#00427c', '#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#DCE775', '#FF8A65', '#BA68C8'];

class ThemeForm extends React.Component {

    constructor(props) {
        super(props);

        if (_.isEmpty(this.props.theme)) {
            this.state = { name: '', description: '', classNamePrefix: 'mdc-', global: { backgroundColor: COLORS[0] }, button: {}, checkbox: {}, fab: {}, textField: {}, textArea: {}, errors: {} };
        } else {
            this.state = {
                name: this.props.theme.name,
                classNamePrefix: 'mdc-',
                description: this.props.theme.description,
                global: _.isEmpty(this.props.theme.styling.global) ? {} : this.props.theme.styling.global,
                button: _.isEmpty(this.props.theme.styling.button) ? {} : this.props.theme.styling.button,
                checkbox: _.isEmpty(this.props.theme.styling.checkbox) ? {} : this.props.theme.styling.checkbox,
                fab: _.isEmpty(this.props.theme.styling.fab) ? {} : this.props.theme.styling.fab,
                textField: _.isEmpty(this.props.theme.styling.textField) ? {} : this.props.theme.styling.textField,
                textArea: _.isEmpty(this.props.theme.styling.textArea) ? {} : this.props.theme.styling.textArea,
                update: true
            };
        }
    }

    componentWillUnmount() {
        $(document).off('click');
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

    updateTheme(name, styling) {
        this.setState({
            [name]: styling
        });
    }

    theme() {
        return { name: this.state.name, description: this.state.description, classNamePrefix: this.state.classNamePrefix, styling: { global: this.state.global, button: this.state.button, checkbox: this.state.checkbox, fab: this.state.fab, textField: this.state.textField, textArea: this.state.textArea } };
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <TextField label='Theme Name' name='name' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '100%' }} defaultValue={this.state.name} /><br />
                <TextField label='Theme Description' name='description' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} defaultValue={this.state.description} /><br /><br />

                <div className='mdc-typography--display1'>Global</div><br />
                <GlobalThemeForm theme={this.theme()} colors={COLORS} updateTheme={(global) => this.updateGlobalTheme(global)} /><br />

                <div className='mdc-typography--display1'>Button</div><br />
                <ButtonThemeForm theme={this.theme()} colors={COLORS} updateTheme={(data) => this.updateTheme('button', data)} /><br />

                <div className='mdc-typography--display1'>Checkbox</div><br />
                <CheckboxThemeForm theme={this.theme()} colors={COLORS} updateTheme={(data) => this.updateTheme('checkbox', checkbox)} /><br />

                <div className='mdc-typography--display1'>Checkbox</div><br />
                <FabThemeForm theme={this.theme()} colors={COLORS} updateTheme={(data) => this.updateTheme('fab', data)} /><br />

                <div className='mdc-typography--display1'>TextField</div><br />
                <TextFieldThemeForm theme={this.theme()} colors={COLORS} updateTheme={(data) => this.updateTheme('textField', data)} /><br />

                <div className='mdc-typography--display1'>TextArea</div><br />
                <TextAreaThemeForm theme={this.theme()} colors={COLORS} updateTheme={(data) => this.updateTheme('textArea', data)} /><br />

                <Button className='sign-up-form-button'>Save</Button>
            </FormWrapper>
        );
    }
}

ThemeForm.propTypes = {
    theme: PropTypes.object
};

export default ThemeForm;
