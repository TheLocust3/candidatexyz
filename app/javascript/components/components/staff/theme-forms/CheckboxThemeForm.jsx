import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import ColorPicker from '../../global/ColorPicker';
import FontPicker from '../../global/FontPicker';
import Checkbox from '../../base/Checkbox';
import TextField from '../../base/TextField';

class CheckboxThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { checkbox: _.isEmpty(this.props.theme.styling.checkbox) ? { backgroundColor: this.props.colors[0], borderColor: this.props.colors[0], fontSize: '16px' } : this.props.theme.styling.checkbox };
    }

    handleChange(event, suffix) {
        let checkbox = this.state.checkbox;
        checkbox[event.target.name] = event.target.value + suffix;

        this.setState({
            checkbox: checkbox
        });

        this.props.updateTheme(checkbox);
    }

    handleColorChange(color, style) {
        let checkbox = { ...this.state.checkbox, [style]: color.hex };
        this.setState({
            checkbox: checkbox
        });

        this.props.updateTheme(checkbox);
    }

    render() {
        return (
            <div>
                <Checkbox label='Sample Checkbox' onChange={() => {}} themeOverride={this.props.theme} /><br />

                <ColorPicker label='Pick Color' color={this.state.checkbox.backgroundColor} colors={this.props.colors} onChange={(color) => this.handleColorChange(color, 'backgroundColor')}  />
                <ColorPicker label='Pick Border Color' color={this.state.checkbox.borderColor} colors={this.props.colors} onChange={(color) => this.handleColorChange(color, 'borderColor')}  />

                <FontPicker onChange={(font) => { this.handleChange({ target: { name: 'fontFamily', value: font } }, '') }} fontFamily={this.state.checkbox.fontFamily} />
                <TextField type='number' label='Font Size' name='fontSize' onChange={(event) => { this.handleChange(event, 'px') }} defaultValue={_.replace(this.state.checkbox.fontSize, 'px', '')} />
            </div>
        );
    }
}

CheckboxThemeForm.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTheme: PropTypes.func.isRequired
};

export default CheckboxThemeForm;
