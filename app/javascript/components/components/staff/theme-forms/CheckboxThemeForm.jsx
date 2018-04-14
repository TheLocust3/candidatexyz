import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import Button from '../../base/Button';
import Checkbox from '../../base/Checkbox';

class CheckboxThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { checkbox: _.isEmpty(this.props.theme.styling.checkbox) ? { backgroundColor: this.props.colors[0], borderColor: this.props.colors[0] } : this.props.theme.styling.checkbox };
    }

    componentDidMount() {
        $(document).click((event) => { // TODO: find a better way to do this
            let target = event.target;

            if (!$(event.target).parents().is('.color-picker-wrapper')) {
                this.setState({
                    colorPickerOpen: false,
                    borderColorPickerOpen: false
                });
            }
        });
    }

    handleColorChange(color, event, style) {
        let checkbox = { ...this.state.checkbox, [style]: color.hex };
        this.setState({
            checkbox: checkbox
        });

        this.props.updateTheme(checkbox);
    }

    onColorPickerOpen(event) {
        event.preventDefault();

        this.setState({
            [event.target.name]: !this.state[event.target.name]
        });
    }

    render() {
        let displayColorPicker = this.state.colorPickerOpen ? 'visible' : 'hidden';
        let displayBorderColorPicker = this.state.borderColorPickerOpen ? 'visible' : 'hidden';

        return (
            <div>
                <Checkbox label='Sample Checkbox' onChange={() => {}} themeOverride={this.props.theme} /><br />

                <div className='color-picker-wrapper'>
                    <Button condensed={true} name='colorPickerOpen' onClick={this.onColorPickerOpen.bind(this)}>Pick Color</Button><br /><br />
                    
                    <div className='color-picker' style={{ visibility: displayColorPicker }}>
                        <BlockPicker color={this.state.checkbox.backgroundColor} onChangeComplete={(color, event) => this.handleColorChange(color, event, 'backgroundColor')} colors={this.props.colors} />
                    </div>
                </div>

                <div className='color-picker-wrapper'>
                    <Button condensed={true} name='borderColorPickerOpen' onClick={this.onColorPickerOpen.bind(this)}>Pick Border Color</Button><br /><br />
                    
                    <div className='color-picker' style={{ visibility: displayBorderColorPicker }}>
                        <BlockPicker color={this.state.checkbox.borderColor} onChangeComplete={(color, event) => this.handleColorChange(color, event, 'borderColor')} colors={this.props.colors} />
                    </div>
                </div>
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
