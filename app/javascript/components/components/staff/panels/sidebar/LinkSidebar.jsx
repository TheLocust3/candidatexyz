import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import MDCAutoInit from '../../../global/MDCAutoInit';
import DeleteElementButton from './DeleteElementButton';
import ColorPicker from '../../../global/ColorPicker';
import FontPicker from '../../../global/FontPicker';
import CustomStyler from '../../../global/CustomStyler';
import TextField from '../../../base/TextField';
import Button from '../../../base/Button';

class LinkSidebar extends React.Component {

    updateElement(element) {
        let elements = this.props.elements;
        elements[element.index] = element;

        this.props.updateInnerElements(elements);
    }

    handleChange(event) {
        let element = this.props.element;
        element[event.target.name] = event.target.value;

        this.updateElement(element);
    }

    handleThemeChange(value, attribute, suffix) {
        let element = this.props.element;
        element.theme = _.isEmpty(element.theme) ? {} : element.theme;

        if (_.isEmpty(suffix)) {
            element.theme[attribute] = value;
        } else {
            element.theme[attribute] = value + suffix;
        }

        this.updateElement(element);
    }

    render() {
        let element = this.props.element;
        let theme = _.isEmpty(this.props.element.theme) ? {} : this.props.element.theme;

        return (
            <div>
                <DeleteElementButton elements={this.props.elements} element={element} updateElements={this.props.updateInnerElements} />
                <br />

                <span className='mdc-typography--body1'>
                    <b>ID:</b> <code>{element.uuid}</code>
                </span><br />

                <TextField dense={true} label='Text' name='text' onChange={(event) => this.handleChange(event)} defaultValue={element.text} /><br />

                <TextField dense={true} label='URL' name='url' onChange={(event) => this.handleChange(event)} defaultValue={element.url} />
                <br /><br />

                <ColorPicker label='Pick Color' color={theme.color} onChange={(color) => this.handleThemeChange(color.hex, 'color')} />
                <ColorPicker label='Pick Hover Color' color={theme.colorHover} onChange={(color) => this.handleThemeChange(color.hex, 'colorHover')} />

                <div style={{ position: 'relative' }}>
                    <FontPicker onChange={(font) => { this.handleThemeChange(font, 'fontFamily') }} fontFamily={theme.fontFamily} style={{ marginTop: '0.75em' }} />
                    <TextField type='number' label='Font Size' onChange={(event) => { this.handleThemeChange(event.target.value, 'fontSize', 'px') }} defaultValue={_.replace(theme.fontSize, 'px', '')} style={{ position: 'absolute', top: 0, left: '35%' }} /><br />
                </div>

                <CustomStyler small={true} custom={theme.custom} onChange={(custom) => { this.handleThemeChange(custom, 'custom') }} />
                
                <MDCAutoInit />
            </div>
        );
    }
}

LinkSidebar.propTypes = {
    elements: PropTypes.array,
    element: PropTypes.object,
    updateInnerElements: PropTypes.func
};

export default LinkSidebar;
