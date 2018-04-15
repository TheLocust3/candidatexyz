import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

import Select from '../base/Select';
import SelectItem from '../base/SelectItem';

const FONTS = [ { name: 'Default', value: '' }, { name: 'Georgia', value: 'Georgia, serif' }, { name: 'Palatino Linotype', value: '"Palatino Linotype", "Book Antiqua", Palatino, serif' }, { name: 'Times New Roman', value: '"Times New Roman", Times, serif' },
        { name: 'Arial', value: 'Arial, Helvetica, sans-serif' }, { name: 'Arial Black', value: '"Arial Black", Gadget, sans-serif' }, { name: 'Impact', value: 'Impact, Charcoal, sans-serif' },
        { name: 'Lucida Sans Unicode', value: '"Lucida Sans Unicode", "Lucida Grande", sans-serif' }, { name: 'Tahoma', value: 'Tahoma, Geneva, sans-serif' }, { name: 'Trebuchet MS', value: '"Trebuchet MS", Helvetica, sans-serif' },
        { name: 'Verdana', value: 'Verdana, Geneva, sans-serif' }, { name: 'Courier New', value: '"Courier New", Courier, monospace' }, { name: 'Lucida Console', value: '"Lucida Console", Monaco, monospace' }];

class FontPicker extends React.Component {

    handleFontChange(select) {
        this.props.onChange(_.find(FONTS, { name: select.value }).value);
    }

    render() {
        let fontFamily = _.isEmpty(this.props.fontFamily) ? '' : this.props.fontFamily;

        return (
            <div>
                <Select label='Font' onChange={(select) => this.handleFontChange(select)} selectedIndex={_.findIndex(FONTS, { value: fontFamily })} style={{ width: '30%', ...this.props.style }}>
                    {FONTS.map((font) => {
                        return (
                            <SelectItem key={font.name}>
                                {font.name}
                            </SelectItem>
                        );
                    })}
                </Select>
            </div>
        );
    }
}

FontPicker.propTypes = {
    fontFamily: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.object
};

export default FontPicker;
