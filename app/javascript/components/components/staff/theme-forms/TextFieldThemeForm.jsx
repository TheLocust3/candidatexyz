import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import Button from '../../base/Button';
import TextField from '../../base/TextField';

class TextFieldThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { textField: _.isEmpty(this.props.theme.styling.textField) ? { color: this.props.colors[0] } : this.props.theme.styling.textField };
    }

    componentDidMount() {
        $(document).click((event) => { // TODO: find a better way to do this
            let target = event.target;

            if (!$(event.target).parents().is('.color-picker-wrapper')) {
                this.setState({
                    colorPickerOpen: false
                });
            }
        });
    }

    handleColorChange(color, event, style) {
        let textField = { ...this.state.textField, [style]: color.hex };
        this.setState({
            textField: textField
        });

        this.props.updateTheme(textField);
    }

    onColorPickerOpen(event) {
        event.preventDefault();

        this.setState({
            [event.target.name]: !this.state[event.target.name]
        });
    }

    render() {
        let displayColorPicker = this.state.colorPickerOpen ? 'visible' : 'hidden';

        return (
            <div>
                <TextField label='Sample Textfield' onChange={(event) => { event.preventDefault(); }} themeOverride={this.props.theme} />
                <br /><br />

                <div className='color-picker-wrapper'>
                    <Button condensed={true} name='colorPickerOpen' onClick={this.onColorPickerOpen.bind(this)}>Pick Color</Button><br /><br />
                    
                    <div className='color-picker' style={{ visibility: displayColorPicker }}>
                        <BlockPicker color={this.state.textField.color} onChangeComplete={(color, event) => this.handleColorChange(color, event, 'color')} colors={this.props.colors} />
                    </div>
                </div>
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
