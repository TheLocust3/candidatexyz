import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

import ColorPicker from '../../global/ColorPicker';
import FontPicker from '../../global/FontPicker';
import Button from '../../base/Button';
import TextField from '../../base/TextField';

class ThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { button: _.isEmpty(this.props.theme.styling.button) ? { raised: { fontSize: '24px' }, flat: { fontSize: '24px' } } : this.props.theme.styling.button };

        this.state.button.raised = _.isEmpty(this.state.button.raised) ? {} : this.state.button.raised;
        this.state.button.flat = _.isEmpty(this.state.button.flat) ? {} : this.state.button.flat;
    }

    handleChange(event, type, suffix) {
        let button = this.state.button;
        button[type][event.target.name] = event.target.value + suffix;

        this.setState({
            button: button
        });

        this.props.updateTheme(button);
    }

    handleColorChange(color, style, name) {
        let button = { ...this.state.button, [name]: { ...this.state.button[name], [style]: color.hex } };
        this.setState({
            button: button
        });

        this.props.updateTheme(button);
    }

    handleDimensionChange(event, type) {
        let button = this.state.button;

        if (_.isEmpty(event.target.value)) {
            button[type][event.target.name] = 'auto';
        } else {
            button[type][event.target.name] = event.target.value + 'px';
        }

        this.setState({
            button: button
        });
    }

    onSampleClick(event) {
        event.preventDefault();
    }

    renderRaisedButtonPanel() {
        return (
            <div>
                <center>
                    <Button onClick={this.onSampleClick.bind(this)} themeOverride={this.props.theme}>Sample Raised Button</Button>
                </center><br /><br />

                <ColorPicker label='Pick Color' color={this.state.button.raised.backgroundColor} colors={this.props.colors} onChange={(color) => this.handleColorChange(color, 'backgroundColor', 'raised')} style={{ display: 'inline', float: 'left', marginRight: '5%' }} />
                <ColorPicker label='Pick Text Color' color={this.state.button.raised.color} colors={this.props.colors} onChange={(color) => this.handleColorChange(color, 'color', 'raised')} />

                <div style={{ position: 'relative' }}>
                    <FontPicker onChange={(font) => { this.handleChange({ target: { name: 'fontFamily', value: font } }, 'raised', '') }} fontFamily={this.state.button.raised.fontFamily} style={{ marginTop: '0.75em' }} />
                    <TextField type='number' label='Font Size' name='fontSize' onChange={(event) => { this.handleChange(event, 'raised', 'px') }} defaultValue={_.replace(this.state.button.raised.fontSize, 'px', '')} style={{ position: 'absolute', top: 0, left: '35%' }} /><br />
                </div>

                <TextField type='number' label='Height' name='height' onChange={(event) => { this.handleDimensionChange(event, 'raised') }} defaultValue={_.replace(this.state.button.raised.height, 'px', '')} style={{ marginRight: '5%' }} />
                <TextField type='number' label='Width' name='width' onChange={(event) => { this.handleDimensionChange(event, 'raised') }} defaultValue={_.replace(this.state.button.raised.width, 'px', '')} />
            </div>
        )
    }

    renderFlatButtonPanel() {
        let displayPicker = this.state.colorPickerOpen ? 'visible' : 'hidden';

        return (
            <div>
                <center>
                    <Button flat={true} onClick={this.onSampleClick.bind(this)} themeOverride={this.props.theme}>Sample Raised Button</Button>
                </center><br /><br />

                <ColorPicker className='color-picker-left' label='Pick Color' color={this.state.button.flat.backgroundColor} colors={this.props.colors} onChange={(color) => this.handleColorChange(color, 'color', 'flat')} />

                <div style={{ position: 'relative' }}>
                    <FontPicker onChange={(font) => { this.handleChange({ target: { name: 'fontFamily', value: font } }, 'flat', '') }} fontFamily={this.state.button.flat.fontFamily} style={{ marginTop: '0.75em' }} />
                    <TextField type='number' label='Font Size' name='fontSize' onChange={(event) => { this.handleChange(event, 'flat', 'px') }} defaultValue={_.replace(this.state.button.flat.fontSize, 'px', '')} style={{ position: 'absolute', top: 0, left: '35%' }} /><br />
                </div>

                <TextField type='number' label='Height' name='height' onChange={(event) => { this.handleDimensionChange(event, 'flat') }} defaultValue={_.replace(this.state.button.flat.height, 'px', '')} style={{ marginRight: '5%' }} />
                <TextField type='number' label='Width' name='width' onChange={(event) => { this.handleDimensionChange(event, 'flat') }} defaultValue={_.replace(this.state.button.flat.width, 'px', '')} />
            </div>
        )
    }

    render() {
        let panel = this.state.panel == null ? 0 : this.state.panel;

        return (
            <div>
                <nav className='mdc-tab-bar' role='tablist' data-mdc-auto-init='MDCTabBar'>
                    <span role='tab' className='mdc-tab mdc-tab--active' onClick={() => { this.setState({ panel: 0 }); }}>Raised</span>
                    <span role='tab' className='mdc-tab' onClick={() => { this.setState({ panel: 1 }); }}>Flat</span>

                    <span className='mdc-tab-bar__indicator'></span>
                </nav><br />

                <div>
                    <div className='panel active' role='tabpanel' style={{ display: panel == 0 ? 'initial' : 'none' }}>                    
                        {this.renderRaisedButtonPanel()}
                    </div>

                    <div className='panel' role='tabpanel' style={{ display: panel == 1 ? 'initial' : 'none' }}>
                        {this.renderFlatButtonPanel()}
                    </div>
                </div>
            </div>
        );
    }
}

ThemeForm.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTheme: PropTypes.func.isRequired
};

export default ThemeForm;
