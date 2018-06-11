import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import ColorPicker from '../../global/ColorPicker';
import FontPicker from '../../global/FontPicker';
import CustomStyler from '../../global/CustomStyler';
import TextField from '../../base/TextField';

class LinkStyler extends React.Component {

    handleChange(attribute, value, suffix) {
        let theme = _.isEmpty(this.props.theme) ? {} : this.props.theme;

        if (_.isEmpty(suffix)) {
            theme[attribute] = value;
        } else {
            theme[attribute] = value + suffix;
        }

        this.props.updateTheme(theme);
    }

    render() {
        let theme = _.isEmpty(this.props.theme) ? {} : this.props.theme;

        return (
            <div>
                <ColorPicker label='Pick Text Color' color={theme.color} colors={this.props.colors} onChange={(color) => this.handleChange('color', color.hex)}  />

                <div style={{ position: 'relative' }}>
                    <FontPicker onFontFamilyChange={(font) => { this.handleChange('fontFamily', font) }} onLoadedFontChange={(font) => { this.handleChange('loadedFont', font) }} fontFamily={theme.fontFamily} loadedFont={theme.loadedFont} style={{ marginTop: '0.75em' }} />
                    <TextField type='number' label='Font Size' onChange={(event) => { this.handleChange('fontSize', event.target.value, 'px') }} value={_.replace(theme.fontSize, 'px', '')} style={{ position: 'absolute', top: 0, left: '35%' }} /><br />
                </div>

                <br /><br />

                <CustomStyler custom={theme.custom} onChange={(custom) => { this.handleChange('custom', custom) }} />
            </div>
        );
    }
}

LinkStyler.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string),
    updateTheme: PropTypes.func.isRequired
};

export default LinkStyler;
