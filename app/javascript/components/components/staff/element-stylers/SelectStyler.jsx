import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

import ColorPicker from '../../global/ColorPicker';
import FontPicker from '../../global/FontPicker';
import TextField from '../../base/TextField';

class SelectStyler extends React.Component {

    handleChange(attribute, value) {
        let theme = _.isEmpty(this.props.theme) ? {} : this.props.theme;
        theme[attribute] = value;

        this.props.updateTheme(theme);
    }

    render() {
        let theme = _.isEmpty(this.props.theme) ? {} : this.props.theme;

        return (
            <div>
                <ColorPicker label='Pick Color' color={theme.color} colors={this.props.colors} onChange={(color) => this.handleChange('color', color.hex)}  />

                <FontPicker onFontFamilyChange={(font) => { this.handleChange('fontFamily', font) }} onLoadedFontChange={(font) => { this.handleChange('loadedFont', font) }} fontFamily={theme.fontFamily} loadedFont={theme.loadedFont} />
            </div>
        );
    }
}

SelectStyler.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string),
    updateTheme: PropTypes.func.isRequired
};

export default SelectStyler;
