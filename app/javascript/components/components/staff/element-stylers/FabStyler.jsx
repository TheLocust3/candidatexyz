import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

import ColorPicker from '../../global/ColorPicker';
import CustomStyler from '../../global/CustomStyler';
import TextField from '../../base/TextField';

class FabStyler extends React.Component {

    handleChange(attribute, value) {
        let theme = this.props.theme;
        theme[attribute] = value;

        this.props.updateTheme(theme);
    }

    render() {
        let theme = _.isEmpty(this.props.theme) ? {} : this.props.theme;

        return (
            <div>
                <ColorPicker className='color-picker-left' label='Pick Color' color={theme.backgroundColor} colors={this.props.colors} onChange={(color) => this.handleChange('backgroundColor', color.hex)}  />
                <ColorPicker label='Pick Icon Color' color={theme.color} colors={this.props.colors} onChange={(color) => this.handleChange('color', color.hex)}  />
                <br /><br />

                <CustomStyler custom={theme.custom} onChange={(custom) => { this.handleChange('custom', custom) }} />
            </div>
        );
    }
}

FabStyler.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string),
    updateTheme: PropTypes.func.isRequired
};

export default FabStyler;
