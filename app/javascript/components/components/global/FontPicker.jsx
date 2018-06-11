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

        this.state = { selectedIndex: this.selectedIndex(), otherOpen: other };
    }

    selectedIndex() {
        let fontFamily = _.isEmpty(this.props.fontFamily) ? '' : this.props.fontFamily;
        let selectedIndex = _.findIndex(FONTS, { value: fontFamily });
        
        selectedIndex = selectedIndex == -1 && !_.isEmpty(fontFamily) ? _.findIndex(FONTS, { value: 'other' }) : selectedIndex;

        return selectedIndex;
    }

    handleFontChange(select) {
        if (select.value == 'Other') {
            this.setState({
                otherOpen: true
            });
        } else {
            this.props.onFontFamilyChange(_.find(FONTS, { name: select.value }).value);
            this.props.onLoadedFontChange('');

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
                <Select label='Font' onChange={(select) => this.handleFontChange(select)} selectedIndex={this.selectedIndex()} style={{ width: '30%', ...this.props.style }}>
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
