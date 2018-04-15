import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import ColorPicker from '../../global/ColorPicker';
import FontPicker from '../../global/FontPicker';
import Select from '../../base/Select';
import SelectItem from '../../base/SelectItem';

class FabThemeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { select: _.isEmpty(this.props.theme.styling.select) ? { color: this.props.colors[0] } : this.props.theme.styling.select };
    }

    handleFontChange(font) {
        let select = this.state.select;
        select.fontFamily = font;

        this.setState({
            select: select
        });

        this.props.updateTheme(select);
    }

    handleColorChange(color, style) {
        let select = { ...this.state.select, [style]: color.hex };
        this.setState({
            select: select
        });

        this.props.updateTheme(select);
    }

    render() {
        return (
            <div>
                <Select label='Sample Select' onChange={() => {}} themeOverride={this.props.theme}>
                    <SelectItem>
                        A sample item
                    </SelectItem>

                    <SelectItem>
                        A second sample item
                    </SelectItem>
                </Select>
                <br /><br />

                <ColorPicker label='Pick Color' color={this.state.select.color} colors={this.props.colors} onChange={(color) => this.handleColorChange(color, 'color')}  />
                <FontPicker onChange={(font) => { this.handleFontChange(font) }} fontFamily={this.state.select.fontFamily} />
            </div>
        );
    }
}

FabThemeForm.propTypes = {
    theme: PropTypes.object,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTheme: PropTypes.func.isRequired
};

export default FabThemeForm;
