import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import MDCAutoInit from '../../../global/MDCAutoInit';
import DeleteElementButton from './DeleteElementButton';
import ColorPicker from '../../../global/ColorPicker';
import FontPicker from '../../../global/FontPicker';
import TextField from '../../../base/TextField';
import Button from '../../../base/Button';

class TextAreaSidebar extends React.Component {

    constructor(props) {
        super(props);

        if (_.isEmpty(this.props.element.theme)) {
            let element = this.props.element;
            element.theme = {};

            this.updateElement(element);
        }
    }

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

    handleThemeChange(value, attribute) {
        let element = this.props.element;
        element.theme[attribute] = value;

        this.updateElement(element);
    }

    renderThemeEditor() {
        let theme = this.props.element.theme;

        return (
            <div>
                <ColorPicker label='Pick Color' color={theme.color} onChange={(color) => this.handleThemeChange(color.hex, 'color')}  />

                <FontPicker onChange={(font) => { this.handleThemeChange(font, 'fontFamily') }} fontFamily={theme.fontFamily} />
            </div>
        )
    }

    render() {
        let element = this.props.element;

        return (
            <div>
                <DeleteElementButton elements={this.props.elements} element={element} updateElements={this.props.updateInnerElements} />
                <br />

                <span className='mdc-typography--body1'>
                    <b>ID:</b> <code>{element.uuid}</code>
                </span>

                <TextField dense={true} label='Text' name='text' onChange={(event) => this.handleChange(event)} defaultValue={this.props.element.text} />

                <TextField dense={true} type='number' name='rows' label='Rows' onChange={(event) => { this.handleChange(event) }} defaultValue={String(element.rows)} style={{ width: '45%', marginRight: '5%' }} />
                <TextField dense={true} type='number' name='cols' label='Cols' onChange={(event) => { this.handleChange(event) }} defaultValue={String(element.cols)} style={{ width: '45%' }} />

                {this.renderThemeEditor()}
                
                <MDCAutoInit />
            </div>
        );
    }
}

TextAreaSidebar.propTypes = {
    elements: PropTypes.array,
    element: PropTypes.object,
    updateInnerElements: PropTypes.func
};

export default TextAreaSidebar;
