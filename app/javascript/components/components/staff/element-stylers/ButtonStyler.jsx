import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

import ColorPicker from '../../global/ColorPicker';
import FontPicker from '../../global/FontPicker';
import CustomStyler from '../../global/CustomStyler';
import TextField from '../../base/TextField';

class ButtonStyler extends React.Component {

    handleChange(attribute, value, suffix) {
        let theme = this.props.theme;

        if (_.isEmpty(suffix)) {
            theme[attribute] = value;
        } else {
            if (_.isEmpty(value)) {
                theme[attribute] = 'auto';
            } else {
                theme[attribute] = value + suffix;
            }
        }

        this.props.updateTheme(theme);
    }

    render() {
        let theme = _.isEmpty(this.props.theme) ? {} : this.props.theme;

        return (
            <div>
                <ColorPicker label='Pick Color' color={theme.backgroundColor} colors={this.props.colors} onChange={(color) => this.handleChange('backgroundColor', color.hex)} style={{ display: 'inline', float: 'left', marginRight: '5%' }} />
                <ColorPicker label='Pick Text Color' color={theme.color} colors={this.props.colors} onChange={(color) => this.handleChange('color', color.hex)} />

                <div style={{ position: 'relative' }}>
                    <FontPicker onChange={(font) => { this.handleChange('fontFamily', font) }} fontFamily={theme.fontFamily} style={{ marginTop: '0.75em' }} />
                    <TextField type='number' label='Font Size' onChange={(event) => { this.handleChange('fontSize', event.target.value, 'px') }} defaultValue={_.replace(theme.fontSize, 'px', '')} style={{ position: 'absolute', top: 0, left: '35%' }} /><br />
                </div>

                <TextField type='number' label='Height' onChange={(event) => { this.handleChange('height', event.target.value, 'px') }} defaultValue={_.replace(theme.height, 'px', '')} style={{ marginRight: '5%' }} />
                <TextField type='number' label='Width' onChange={(event) => { this.handleChange('width', event.target.value, 'px') }} defaultValue={_.replace(theme.width, 'px', '')} />
                <br /><br />

                <CustomStyler custom={theme.custom} onChange={(custom) => { this.handleChange('custom', custom) }} />
            </div>
        );
    }
}

ButtonStyler.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string),
    updateTheme: PropTypes.func.isRequired
};

export default ButtonStyler;
