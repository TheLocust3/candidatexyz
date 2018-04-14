import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import ColorPicker from '../../global/ColorPicker';
import TextField from '../../base/TextField';

class TextFieldThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { textField: _.isEmpty(this.props.theme.styling.textField) ? { color: this.props.colors[0] } : this.props.theme.styling.textField };
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
