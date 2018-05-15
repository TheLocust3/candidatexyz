import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import Header from '../base/Header';
import Button from '../base/Button';
import TextField from '../base/TextField';
import Select from '../base/Select';
import SelectItem from '../base/SelectItem';
import { history } from '../../../constants';
import ThemeApi from '../../../api/theme-api';

import FormWrapper from '../forms/FormWrapper';
import LinkThemeForm from './theme-forms/LinkThemeForm';
import HeaderThemeForm from './theme-forms/HeaderThemeForm';
import ButtonThemeForm from './theme-forms/ButtonThemeForm';
import CheckboxThemeForm from './theme-forms/CheckboxThemeForm';
import FabThemeForm from './theme-forms/FabThemeForm';
import TextFieldThemeForm from './theme-forms/TextFieldThemeForm';
import TextAreaThemeForm from './theme-forms/TextAreaThemeForm';
import SelectThemeForm from './theme-forms/SelectThemeForm';

const COLORS = ['#00427c', '#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#DCE775', '#FF8A65', '#BA68C8'];
const EXTENDS = [{ label: 'Material', value: 'mdc-' }, { label: 'None', value: '' }];

class ThemeForm extends React.Component {

    constructor(props) {
        super(props);

        if (_.isEmpty(this.props.theme)) {
            this.state = { name: '', description: '', classNamePrefix: 'mdc-', link: {}, header: {}, button: {}, checkbox: {}, fab: {}, textField: {}, textArea: {}, select: {}, errors: {} };
        } else if (_.isEmpty(this.props.theme.styling)) {
            this.state = { name: this.props.theme.name, description: this.props.theme.description, classNamePrefix: this.props.theme.classNamePrefix, link: {}, header: {}, button: {}, checkbox: {}, fab: {}, textField: {}, textArea: {}, select: {}, errors: {} };
        } else {
            this.state = {
                name: this.props.theme.name,
                classNamePrefix: this.props.theme.classNamePrefix,
                description: this.props.theme.description,
                link: _.isEmpty(this.props.theme.styling.link) ? {} : this.props.theme.styling.link,
                header: _.isEmpty(this.props.theme.styling.header) ? {} : this.props.theme.styling.header,
                button: _.isEmpty(this.props.theme.styling.button) ? {} : this.props.theme.styling.button,
                checkbox: _.isEmpty(this.props.theme.styling.checkbox) ? {} : this.props.theme.styling.checkbox,
                fab: _.isEmpty(this.props.theme.styling.fab) ? {} : this.props.theme.styling.fab,
                textField: _.isEmpty(this.props.theme.styling.textField) ? {} : this.props.theme.styling.textField,
                textArea: _.isEmpty(this.props.theme.styling.textArea) ? {} : this.props.theme.styling.textArea,
                select: _.isEmpty(this.props.theme.styling.select) ? {} : this.props.theme.styling.select,
                update: true
            };
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleExtendsChange(select) {
        this.setState({
            classNamePrefix: _.find(EXTENDS, { label: select.value }).value
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
                window.location.href = '/staff/themes';
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

    updateTheme(name, styling) {
        this.setState({
            [name]: styling
        });
    }

    theme() {
        return { name: this.state.name, description: this.state.description, classNamePrefix: this.state.classNamePrefix, styling: { link: this.state.link, header: this.state.header, button: this.state.button, checkbox: this.state.checkbox, fab: this.state.fab, textField: this.state.textField, textArea: this.state.textArea, select: this.state.select } };
    }

    renderExtends() {
        return (
            <Select label='Extend Packaged Theme' onChange={(select) => this.handleExtendsChange(select)} selectedIndex={_.findIndex(EXTENDS, { value: this.state.classNamePrefix })} style={{ width: '50%' }}>
                {_.map(EXTENDS, ((theme) => {
                    return (
                        <SelectItem key={theme.value}>
                            {theme.label}
                        </SelectItem>
                    );
                }))}
            </Select>
        )
    }

    render() {
        return (
            <FormWrapper handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <TextField label='Theme Name' name='name' onChange={(event) => this.handleChange(event)} required={true} style={{ width: '100%' }} defaultValue={this.state.name} /><br />
                <TextField label='Theme Description' name='description' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} defaultValue={this.state.description} /><br /><br />

                {this.renderExtends()}<br /><br /><br />

                <Header type='headlin2'>General Theming</Header><br /><br />

                <Header type='headline3'>Link</Header>
                <LinkThemeForm theme={this.theme()} colors={COLORS} updateTheme={(data) => this.updateTheme('link', data)} /><br />

                <Header type='headline3'>Header</Header>
                <HeaderThemeForm theme={this.theme()} colors={COLORS} updateTheme={(data) => this.updateTheme('header', data)} /><br />

                <br /><hr /><br />

                <Header type='headline2'>Element Theming</Header><br /><br />

                <Header type='headline3'>Button</Header>
                <ButtonThemeForm theme={this.theme()} colors={COLORS} updateTheme={(data) => this.updateTheme('button', data)} /><br />

                <Header type='headline3'>Checkbox</Header>
                <CheckboxThemeForm theme={this.theme()} colors={COLORS} updateTheme={(data) => this.updateTheme('checkbox', data)} /><br />

                <Header type='headline3'>Fab Button</Header>
                <FabThemeForm theme={this.theme()} colors={COLORS} updateTheme={(data) => this.updateTheme('fab', data)} /><br />

                <Header type='headline3'>TextField</Header>
                <TextFieldThemeForm theme={this.theme()} colors={COLORS} updateTheme={(data) => this.updateTheme('textField', data)} /><br />

                <Header type='headline3'>TextArea</Header>
                <TextAreaThemeForm theme={this.theme()} colors={COLORS} updateTheme={(data) => this.updateTheme('textArea', data)} /><br />

                <Header type='headline3'>Select</Header>
                <SelectThemeForm theme={this.theme()} colors={COLORS} updateTheme={(data) => this.updateTheme('select', data)} /><br />

                <Button className='sign-up-form-button'>Save</Button>
            </FormWrapper>
        );
    }
}

ThemeForm.propTypes = {
    theme: PropTypes.object
};

export default ThemeForm;
