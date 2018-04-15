import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import Button from '../base/Button';

class ColorPicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = { colorPickerOpen: false, color: this.props.color };
    }

    componentDidMount() {
        $(document).click((event) => { // TODO: find a better way to do this
            let target = event.target;

            if (!$(event.target).parents().is('.color-picker-wrapper')) {
                this.setState({
                    colorPickerOpen: false,
                });
            }
        });
    }

    componentWillUnmount() {
        $(document).off('click');
    }

    handleColorChange(color, event) {
        this.setState({
            color: color
        });

        this.props.onChange(color);
    }

    onColorPickerOpen(event) {
        event.preventDefault();

        this.setState({
            colorPickerOpen: !this.state.colorPickerOpen
        });
    }

    render() {
        let displayPicker = this.state.colorPickerOpen ? 'visible' : 'hidden';
        
        return (
            <span className='color-picker-wrapper'>
                <Button condensed={true} onClick={this.onColorPickerOpen.bind(this)} style={this.props.style}>{this.props.label}</Button><br /><br />
                
                <div className='color-picker' style={{ visibility: displayPicker }}>
                    <BlockPicker color={this.state.color} onChangeComplete={(color, event) => this.handleColorChange(color, event)} colors={this.props.colors} />
                </div>
            </span>
        );
    }
}

ColorPicker.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    colors: PropTypes.array,
    onChange: PropTypes.func,
    style: PropTypes.object
};

export default ColorPicker;
