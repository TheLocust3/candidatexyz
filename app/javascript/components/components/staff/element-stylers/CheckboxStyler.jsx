import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

import ColorPicker from '../../global/ColorPicker';
import FontPicker from '../../global/FontPicker';
import TextField from '../../base/TextField';

class CheckboxStyler extends React.Component {

    handleChange(attribute, value, suffix) {
        let theme = _.isEmpty(this.props.theme) ? {} : this.props.theme;

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
                <ColorPicker className='color-picker-left' label='Pick Color' color={theme.backgroundColor} colors={this.props.colors} onChange={(color) => this.handleChange('backgroundColor', color.hex)} />
                <ColorPicker label='Pick Border Color' color={theme.borderColor} colors={this.props.colors} onChange={(color) => this.handleChange('borderColor', color.hex)} />

                <div style={{ position: 'relative' }}>
                    <FontPicker onChange={(font) => this.handleChange('fontFamily', font)} fontFamily={theme.fontFamily} style={{ marginTop: '0.75em' }} />
                    <TextField type='number' label='Font Size' onChange={(event) => { this.handleChange('fontSize', event.target.value, 'px') }} value={_.replace(theme.fontSize, 'px', '')} style={{ position: 'absolute', top: 0, left: '35%' }} />
                </div>
            </div>
        );
    }
}

CheckboxStyler.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string),
    updateTheme: PropTypes.func.isRequired
};

export default CheckboxStyler;
