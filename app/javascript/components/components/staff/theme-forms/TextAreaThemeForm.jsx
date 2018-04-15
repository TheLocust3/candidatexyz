import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import ColorPicker from '../../global/ColorPicker';
import FontPicker from '../../global/FontPicker';
import TextArea from '../../base/TextArea';

class TextAreaThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { textArea: _.isEmpty(this.props.theme.styling.textArea) ? { color: this.props.colors[0] } : this.props.theme.styling.textArea };
    }

    handleChange(name, value) {
        let textArea = this.state.textArea;
        textArea[name] = value;

        this.setState({
            textArea: textArea
        });

        this.props.updateTheme(textArea);
    }

    handleColorChange(color, style) {
        let textArea = { ...this.state.textArea, [style]: color.hex };
        this.setState({
            textArea: textArea
        });

        this.props.updateTheme(textArea);
    }

    render() {
        return (
            <div>
                <TextArea label='Sample Textarea' onChange={() => {}} themeOverride={this.props.theme} />
                <br /><br />

                <ColorPicker label='Pick Color' color={this.state.textArea.color} colors={this.props.colors} onChange={(color) => this.handleColorChange(color, 'color')}  />

                <FontPicker onChange={(font) => { this.handleChange('fontFamily', font) }} fontFamily={this.state.textArea.fontFamily} />
            </div>
        );
    }
}

TextAreaThemeForm.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTheme: PropTypes.func.isRequired
};

export default TextAreaThemeForm;
