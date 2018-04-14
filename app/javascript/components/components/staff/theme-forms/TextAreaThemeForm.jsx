import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import Button from '../../base/Button';
import TextArea from '../../base/TextArea';

class TextAreaThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { textArea: _.isEmpty(this.props.theme.styling.textArea) ? { color: this.props.colors[0] } : this.props.theme.styling.textArea };
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
        let textArea = { ...this.state.textArea, [style]: color.hex };
        this.setState({
            textArea: textArea
        });

        this.props.updateTheme(textArea);
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
                <TextArea label='Sample Textarea' onChange={() => {}} themeOverride={this.props.theme} />
                <br /><br />

                <div className='color-picker-wrapper'>
                    <Button condensed={true} name='colorPickerOpen' onClick={this.onColorPickerOpen.bind(this)}>Pick Color</Button><br /><br />
                    
                    <div className='color-picker' style={{ visibility: displayColorPicker }}>
                        <BlockPicker color={this.state.textArea.color} onChangeComplete={(color, event) => this.handleColorChange(color, event, 'color')} colors={this.props.colors} />
                    </div>
                </div>
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
