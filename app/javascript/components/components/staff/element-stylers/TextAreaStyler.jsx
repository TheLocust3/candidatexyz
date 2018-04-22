import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

import ColorPicker from '../../global/ColorPicker';
import FontPicker from '../../global/FontPicker';

class TextAreaStyler extends React.Component {

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

                <FontPicker fontFamily={theme.fontFamily} onChange={(font) => { this.handleChange('fontFamily', font) }} />
            </div>
        );
    }
}

TextAreaStyler.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string),
    updateTheme: PropTypes.func.isRequired
};

export default TextAreaStyler;
