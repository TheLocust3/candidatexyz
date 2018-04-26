import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import DeleteElementButton from './DeleteElementButton';
import Button from '../../../base/Button';
import Select from '../../../base/Select';
import SelectItem from '../../../base/SelectItem';
import ButtonSidebar from './ButtonSidebar';
import FabSidebar from './FabSidebar';
import CheckboxSidebar from './CheckboxSidebar';
import TextFieldSidebar from './TextFieldSidebar';
import TextAreaSidebar from './TextAreaSidebar';
import SelectSidebar from './SelectSidebar';
import ImageSidebar from './ImageSidebar';
import TextSidebar from './TextSidebar';
import LinkSidebar from './LinkSidebar';
import IconButtonSidebar from './IconButtonSidebar';
import ColorPicker from '../../../global/ColorPicker';
import CustomStyler from '../../../global/CustomStyler';

class CellSidebar extends React.Component {

    handleThemeChange(value, attribute) {
        let elements = this.props.elements;
        let element = this.props.selectedElements[0];

        element.theme = _.isEmpty(element.theme) ? {} : element.theme;
        element.theme[attribute] = value;

        elements[element.index] = element;

        this.props.updateInnerElements(elements);
    }

    updateInnerElements(innerElements) {
        let elements = this.props.elements;
        let element = this.props.selectedElements[0];
        
        elements[element.index].elements = innerElements;

        this.props.updateInnerElements(elements);
    }

    renderInnerSidebar(element) {
        if (_.isEmpty(element)) return;

        if (element.type == 'button') {
            return <ButtonSidebar elements={this.props.selectedElements[0].elements} element={element} updateInnerElements={(elements) => this.updateInnerElements(elements)} />;
        } else if (element.type == 'fab') {
            return <FabSidebar elements={this.props.selectedElements[0].elements} element={element} updateInnerElements={(elements) => this.updateInnerElements(elements)} />;
        } else if (element.type == 'checkbox') {
            return <CheckboxSidebar elements={this.props.selectedElements[0].elements} element={element} updateInnerElements={(elements) => this.updateInnerElements(elements)} />;
        } else if (element.type == 'textField') {
            return <TextFieldSidebar elements={this.props.selectedElements[0].elements} element={element} updateInnerElements={(elements) => this.updateInnerElements(elements)} />;
        } else if (element.type == 'textArea') {
            return <TextAreaSidebar elements={this.props.selectedElements[0].elements} element={element} updateInnerElements={(elements) => this.updateInnerElements(elements)} />;
        } else if (element.type == 'select') {
            return <SelectSidebar elements={this.props.selectedElements[0].elements} element={element} updateInnerElements={(elements) => this.updateInnerElements(elements)} />;
        } else if (element.type == 'image') {
            return <ImageSidebar elements={this.props.selectedElements[0].elements} element={element} updateInnerElements={(elements) => this.updateInnerElements(elements)} />;
        } else if (element.type == 'text') {
            return <TextSidebar elements={this.props.selectedElements[0].elements} element={element} updateInnerElements={(elements) => this.updateInnerElements(elements)} />;
        } else if (element.type == 'link') {
            return <LinkSidebar elements={this.props.selectedElements[0].elements} element={element} updateInnerElements={(elements) => this.updateInnerElements(elements)} />;
        } else if (element.type == 'iconButton') {
            return <IconButtonSidebar elements={this.props.selectedElements[0].elements} element={element} updateInnerElements={(elements) => this.updateInnerElements(elements)} />;
        }
    }

    renderSidebar(element) {
        return (
            <div>
                <div className='mdc-typography--title' style={{ textAlign: 'center' }}>{_.capitalize(element.type)} Options</div>

                {this.renderInnerSidebar(element)}
            </div>
        );
    }

    renderHorizontalAlignmentDropdown() {
        let element = this.props.selectedElements[0];
        let theme = _.isEmpty(element.theme) ? {} : element.theme;

        let selectedIndex = 0;
        if (theme.float == 'Left') {
            selectedIndex = 1;
        } else if (theme.float == 'Right') {
            selectedIndex = 2;
        }

        return (
            <div>
                <Select label='H. Align' onChange={(select) => this.handleThemeChange(select.value, 'float')} selectedIndex={selectedIndex} style={{ width: '50%' }}>
                    <SelectItem>
                        None
                    </SelectItem>
                    
                    <SelectItem>
                        Left
                    </SelectItem>

                    <SelectItem>
                        Right
                    </SelectItem>
                </Select>
            </div>
        );
    }
    
    renderInnerSidebars() {
        return (
            this.props.selectedElements.map((element, index) => {
                if (index == 0) return;

                return (
                    <div key={index}>
                        {this.renderSidebar(element)}
                    </div>
                )
            })
        );
    }

    render() {
        let element = this.props.selectedElements[0];
        let theme = _.isEmpty(element.theme) ? {} : element.theme;

        return (
            <div>
                {this.renderInnerSidebars()}
                
                <div className='mdc-typography--title' style={{ textAlign: 'center' }}>{_.capitalize(element.type)} Options</div>

                <DeleteElementButton elements={this.props.elements} element={this.props.selectedElements[0]} updateElements={this.props.updateInnerElements} />
                <br />

                <div className='mdc-typography--body1'>
                    <b>ID:</b> <code>{element.uuid}</code>
                </div>

                <ColorPicker label='Pick Color' color={theme.backgroundColor} onChange={(color) => this.handleThemeChange(color.hex, 'backgroundColor')} />

                {this.renderHorizontalAlignmentDropdown()}<br />

                <CustomStyler small={true} custom={theme.custom} onChange={(custom) => { this.handleThemeChange(custom, 'custom') }} />
            </div>
        );
    }
}

CellSidebar.propTypes = {
    selectedElements: PropTypes.array,
    elements: PropTypes.array,
    updateInnerElements: PropTypes.func
};

export default CellSidebar;
