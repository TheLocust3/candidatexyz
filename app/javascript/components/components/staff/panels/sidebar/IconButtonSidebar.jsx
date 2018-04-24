import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import MDCAutoInit from '../../../global/MDCAutoInit';
import DeleteElementButton from './DeleteElementButton';
import ColorPicker from '../../../global/ColorPicker';
import FontPicker from '../../../global/FontPicker';
import CustomStyler from '../../../global/CustomStyler';
import TextField from '../../../base/TextField';

class IconButtonSidebar extends React.Component {

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

    handleThemeChange(value, attribute, suffix) {
        let element = this.props.element;

        if (_.isEmpty(suffix)) {
            element.theme[attribute] = value;
        } else {
            element.theme[attribute] = value + suffix;
        }

        this.updateElement(element);
    }

    render() {
        let element = this.props.element;
        let theme = _.isEmpty(element.theme) ? {} : element.theme;

        return (
            <div>
                <DeleteElementButton elements={this.props.elements} element={element} updateElements={this.props.updateInnerElements} />
                <br />

                <span className='mdc-typography--body1'>
                    <b>ID:</b> <code>{element.uuid}</code>
                </span><br />

                <TextField dense={true} label='Icon' name='icon' onChange={(event) => this.handleChange(event)} defaultValue={element.icon} /><br />

                <TextField dense={true} label='URL' name='url' onChange={(event) => this.handleChange(event)} defaultValue={element.actionData} />
                <br /><br />

                <ColorPicker label='Pick Color' color={theme.color} onChange={(color) => this.handleThemeChange(color.hex, 'color')} />
                <ColorPicker label='Pick Hover Color' color={theme.colorHover} onChange={(color) => this.handleThemeChange(color.hex, 'colorHover')} />
                <TextField type='number' label='Font Size' onChange={(event) => { this.handleThemeChange(event.target.value, 'fontSize', 'em') }} defaultValue={_.replace(theme.fontSize, 'em', '')}/><br />

                <CustomStyler small={true} custom={theme.custom} onChange={(custom) => { this.handleThemeChange(custom, 'custom') }} />
                
                <MDCAutoInit />
            </div>
        );
    }
}

IconButtonSidebar.propTypes = {
    elements: PropTypes.array,
    element: PropTypes.object,
    updateInnerElements: PropTypes.func
};

export default IconButtonSidebar;
