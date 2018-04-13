import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import { BlockPicker } from 'react-color';

import Button from '../base/Button';
import TextField from '../base/TextField';
import { history } from '../../../constants';
import ThemeApi from '../../../api/theme-api';

import FormWrapper from '../forms/FormWrapper';

const COLORS = ['#00427c', '#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#DCE775', '#FF8A65', '#BA68C8'];

export default class ThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { name: '', description: '', global: { backgroundColor: COLORS[0] }, button: {}, errors: {} };
    }

    componentDidMount() {
        $(document).click((event) => { // TODO: find a better way to do this
            let target = event.target;

            if (!$(event.target).parents().is('.color-picker-wrapper')) {
                this.setState({
                    globalColorPicker: false,
                    buttonColorPicker: false
                });
            }
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleColorChange(color, event, style, name) {
        if (name == 'global') {
            let global = { ...this.state[name], [style]: color.hex };
            let button = this.state.button;
            if (_.isEmpty(button)) {
                button = global
            }

            this.setState({
                global: global,
                button: button
            });
        } else {
            this.setState({
                [name]: { ...this.state[name], [style]: color.hex }
            });
        }
    }

    handleSubmit(event) {
        ThemeApi.create(this.state.name, this.state.description, { global: this.state.global, button: this.state.button }).then(() => {
            history.push('/staff/themes');
        }).catch((response) => {
            this.setState({
                errors: response.responseJSON.errors
            });
        });
    }

    onColorPickerOpen(event) {
        event.preventDefault();

        this.setState({
            [event.target.name]: !this.state[event.target.name]
        });
    }

    onSampleClick(event) {
        event.preventDefault();
    }

    renderGlobalStyling() {
        let displayPicker = this.state.globalColorPicker ? 'visible' : 'hidden';

        return (
            <div>
                <div className='mdc-typography--title'>Primary Color</div>
                <i>Global default fallback color</i><br />

                <div className='color-picker-wrapper'>
                    <Button condensed={true} onClick={this.onColorPickerOpen.bind(this)} name='globalColorPicker' style={this.state.global}>Pick Color</Button><br /><br />
                    
                    <div className='color-picker' style={{ visibility: displayPicker }}>
                        <BlockPicker color={this.state.global.backgroundColor} onChangeComplete={(color, event) => this.handleColorChange(color, event, 'backgroundColor', 'global')} colors={COLORS} />
                    </div>
                </div>
            </div>
        );
    }

    renderButtonStyling() {
        let displayPicker = this.state.buttonColorPicker ? 'visible' : 'hidden';

        return (
            <div>
                <div className='mdc-typography--title'>Button Color</div>
                <Button onClick={this.onSampleClick.bind(this)} style={this.state.button}>Sample Button</Button><br /><br />

                <div className='color-picker-wrapper'>
                    <Button condensed={true} onClick={this.onColorPickerOpen.bind(this)} name='buttonColorPicker'>Pick Color</Button><br /><br />
                    
                    <div className='color-picker' style={{ visibility: displayPicker }}>
                        <BlockPicker color={this.state.button.backgroundColor} onChangeComplete={(color, event) => this.handleColorChange(color, event, 'backgroundColor', 'button')} colors={COLORS} />
                    </div>
                </div>
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

                <Button className='sign-up-form-button'>Save</Button>
            </FormWrapper>
        );
    }
}
