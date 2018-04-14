import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import Button from '../base/Button';
import TextField from '../base/TextField';
import Select from '../base/Select';
import SelectItem from '../base/SelectItem';
import { history } from '../../../constants';
import ThemeApi from '../../../api/theme-api';

import FormWrapper from '../forms/FormWrapper';
import ButtonThemeForm from './theme-forms/ButtonThemeForm';
import CheckboxThemeForm from './theme-forms/CheckboxThemeForm';
import FabThemeForm from './theme-forms/FabThemeForm';
import TextFieldThemeForm from './theme-forms/TextFieldThemeForm';
import TextAreaThemeForm from './theme-forms/TextAreaThemeForm';

const COLORS = ['#00427c', '#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#DCE775', '#FF8A65', '#BA68C8'];
const EXTENDS = { 'Material': 'mdc-', 'None': '' };

class ThemeForm extends React.Component {

    constructor(props) {
        super(props);

        if (_.isEmpty(this.props.theme)) {
            this.state = { name: '', description: '', classNamePrefix: 'mdc-', button: {}, checkbox: {}, fab: {}, textField: {}, textArea: {}, errors: {} };
        } else {
            this.state = {
                name: this.props.theme.name,
                classNamePrefix: 'mdc-',
                description: this.props.theme.description,
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

    handleExtendsChange(select) {
        this.setState({
            classNamePrefix: EXTENDS[select.value]
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

    updateTheme(name, styling) {
        this.setState({
            [name]: styling
        });
    }

    theme() {
        return { name: this.state.name, description: this.state.description, classNamePrefix: this.state.classNamePrefix, styling: { button: this.state.button, checkbox: this.state.checkbox, fab: this.state.fab, textField: this.state.textField, textArea: this.state.textArea } };
    }

    renderExtends() {
        return (
            <Select label='Extend Packaged Theme' onChange={(select) => this.handleExtendsChange(select)} selectedIndex={0} style={{ width: '50%' }}>
                {_.map(EXTENDS, ((value, label) => {
                    return (
                        <SelectItem key={value}>
                            {label}
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

                {this.renderExtends()}<br /><br />

                <div className='mdc-typography--display1'>Button</div><br />
                <ButtonThemeForm theme={this.theme()} colors={COLORS} updateTheme={(data) => this.updateTheme('button', data)} /><br />

                <div className='mdc-typography--display1'>Checkbox</div><br />
                <CheckboxThemeForm theme={this.theme()} colors={COLORS} updateTheme={(data) => this.updateTheme('checkbox', data)} /><br />

                <div className='mdc-typography--display1'>Fab Button</div><br />
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
