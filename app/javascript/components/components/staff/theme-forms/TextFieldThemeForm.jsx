import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import ColorPicker from '../../global/ColorPicker';
import FontPicker from '../../global/FontPicker';
import TextField from '../../base/TextField';

class TextFieldThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { textField: _.isEmpty(this.props.theme.styling.textField) ? { color: this.props.colors[0] } : this.props.theme.styling.textField };
    }

    handleChange(name, value) {
        let textField = this.state.textField;
        textField[name] = value;

        this.setState({
            textField: textField
        });

        this.props.updateTheme(textField);
    }

    handleColorChange(color, style) {
        let textField = { ...this.state.textField, [style]: color.hex };
        this.setState({
            textField: textField
        });

        this.props.updateTheme(textField);
    }

    render() {
        return (
            <div>
                <TextField label='Sample Textfield' onChange={(event) => { event.preventDefault(); }} themeOverride={this.props.theme} />
                <br /><br />

                <ColorPicker label='Pick Color' color={this.state.textField.color} colors={this.props.colors} onChange={(color) => this.handleColorChange(color, 'color')}  />

                <FontPicker onChange={(font) => { this.handleChange('fontFamily', font) }} fontFamily={this.state.textField.fontFamily} />
            </div>
        );
    }
}

TextFieldThemeForm.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTheme: PropTypes.func.isRequired
};

export default TextFieldThemeForm;
