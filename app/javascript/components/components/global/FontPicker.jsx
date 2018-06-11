import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import MDCAutoInit from '../global/MDCAutoInit';

import Select from '../base/Select';
import SelectItem from '../base/SelectItem';
import TextField from '../base/TextField';

const FONTS = [ { name: 'Default', value: '' }, { name: 'Georgia', value: 'Georgia, serif' }, { name: 'Palatino Linotype', value: '"Palatino Linotype", "Book Antiqua", Palatino, serif' }, { name: 'Times New Roman', value: '"Times New Roman", Times, serif' },
        { name: 'Arial', value: 'Arial, Helvetica, sans-serif' }, { name: 'Arial Black', value: '"Arial Black", Gadget, sans-serif' }, { name: 'Impact', value: 'Impact, Charcoal, sans-serif' },
        { name: 'Lucida Sans Unicode', value: '"Lucida Sans Unicode", "Lucida Grande", sans-serif' }, { name: 'Tahoma', value: 'Tahoma, Geneva, sans-serif' }, { name: 'Trebuchet MS', value: '"Trebuchet MS", Helvetica, sans-serif' },
        { name: 'Verdana', value: 'Verdana, Geneva, sans-serif' }, { name: 'Courier New', value: '"Courier New", Courier, monospace' }, { name: 'Lucida Console', value: '"Lucida Console", Monaco, monospace'},
        { name: 'Other', value: 'other' }];

class FontPicker extends React.Component {

    constructor(props) {
        super(props);

        let fontFamily = _.isEmpty(this.props.fontFamily) ? '' : this.props.fontFamily;
        let selectedIndex = _.findIndex(FONTS, { value: fontFamily });
        
        let other = selectedIndex == -1 && !_.isEmpty(fontFamily);
        selectedIndex = other ? _.findIndex(FONTS, { value: 'other' }) : selectedIndex;

        this.state = { selectedIndex: selectedIndex, otherOpen: other };
    }

    handleFontChange(select) {
        if (select.value == 'Other') {
            this.setState({
                otherOpen: true
            });
        } else {
            this.props.onChange(_.find(FONTS, { name: select.value }).value);

            this.setState({
                otherOpen: false
            });
        }
    }

    renderOther() {
        if (!this.state.otherOpen) return;

        return (
            <div>
                <TextField label='Load Font' onChange={(event) => { this.props.onLoadedFontChange(event.target.value) }} value={this.props.loadedFont} style={{ marginRight: '3%' }} />

                <TextField label='Font Name' onChange={(event) => { this.props.onFontFamilyChange(event.target.value) }} value={this.props.fontFamily} />

                <MDCAutoInit />
            </div>
        );
    }

    render() {
        return (
            <div>
                <Select label='Font' onChange={(select) => this.handleFontChange(select)} selectedIndex={this.state.selectedIndex} style={{ width: '30%', ...this.props.style }}>
                    {FONTS.map((font) => {
                        return (
                            <SelectItem key={font.name}>
                                {font.name}
                            </SelectItem>
                        );
                    })}
                </Select>

                {this.renderOther()}
            </div>
        );
    }
}

FontPicker.propTypes = {
    fontFamily: PropTypes.string,
    loadedFont: PropTypes.string,
    onFontFamilyChange: PropTypes.func.isRequired,
    onLoadedFontChange: PropTypes.func.isRequired,
    style: PropTypes.object
};

export default FontPicker;
