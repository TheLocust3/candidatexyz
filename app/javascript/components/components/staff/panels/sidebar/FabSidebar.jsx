import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import MDCAutoInit from '../../../global/MDCAutoInit';
import ColorPicker from '../../../global/ColorPicker';
import TextField from '../../../base/TextField';
import Button from '../../../base/Button';

class FabSidebar extends React.Component {

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

    onDeleteClick(event) {
        event.preventDefault();

        let elements = this.props.elements;

        elements.splice(this.props.element.index, 1);
        elements = elements.map((element, index) => {
            element.index = index;
            return element;
        });

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
                <ColorPicker className='color-picker-left' label='Pick Color' color={theme.backgroundColor} onChange={(color) => this.handleThemeChange(color.hex, 'backgroundColor')}  />
                <ColorPicker label='Pick Icon Color' color={theme.color} onChange={(color) => this.handleThemeChange(color.hex, 'color')}  />
            </div>
        )
    }

    render() {
        let element = this.props.element;

        return (
            <div>
                <center><Button className='red-button' condensed={true} onClick={this.onDeleteClick.bind(this)}>Trash</Button></center><br />

                <span className='mdc-typography--body1'>
                    <b>ID:</b> <code>{element.uuid}</code>
                </span><br />

                <TextField dense={true} label='Icon' name='icon' onChange={(event) => this.handleChange(event)} defaultValue={this.props.element.icon} />
                <br />

                {this.renderThemeEditor()}
                
                <MDCAutoInit />
            </div>
        );
    }
}

FabSidebar.propTypes = {
    elements: PropTypes.array,
    element: PropTypes.object,
    updateInnerElements: PropTypes.func
};

export default FabSidebar;
