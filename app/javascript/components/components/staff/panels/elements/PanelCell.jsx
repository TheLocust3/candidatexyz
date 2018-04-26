import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../../helpers';
import PanelButton from './PanelButton';
import PanelFab from './PanelFab';
import PanelCheckbox from './PanelCheckbox';
import PanelTextField from './PanelTextField';
import PanelTextArea from './PanelTextArea';
import PanelSelect from './PanelSelect';
import PanelImage from './PanelImage';
import PanelText from './PanelText';
import PanelLink from './PanelLink';
import PanelIconButton from './PanelIconButton';

class PanelCell extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `cell-${uuid()}`, type: 'cell', elements: [], theme: {} };
    }

    constructor(props) {
        super(props);

        if (this.props.show) return;

        let element = this.props.element;
        element.width = 100.0 / this.props.elements.length;
        this.updateElements(element);
    }

    handleDrop(event) {
        let element = this.props.element;

        if (_.isEmpty(element.elements)) {
            element.elements = [];
        }

        if (this.props.draggedItem == 'button') {
            element.elements.push(PanelButton.elementStructure(element.elements.length));
        } else if (this.props.draggedItem == 'fab') {
            element.elements.push(PanelFab.elementStructure(element.elements.length));
        } else if (this.props.draggedItem == 'checkbox') {
            element.elements.push(PanelCheckbox.elementStructure(element.elements.length));
        } else if (this.props.draggedItem == 'textField') {
            element.elements.push(PanelTextField.elementStructure(element.elements.length));
        } else if (this.props.draggedItem == 'textArea') {
            element.elements.push(PanelTextArea.elementStructure(element.elements.length));
        } else if (this.props.draggedItem == 'select') {
            element.elements.push(PanelSelect.elementStructure(element.elements.length));
        } else if (this.props.draggedItem == 'image') {
            element.elements.push(PanelImage.elementStructure(element.elements.length));
        } else if (this.props.draggedItem == 'text') {
            element.elements.push(PanelText.elementStructure(element.elements.length));
        } else if (this.props.draggedItem == 'link') {
            element.elements.push(PanelLink.elementStructure(element.elements.length));
        } else if (this.props.draggedItem == 'iconButton') {
            element.elements.push(PanelIconButton.elementStructure(element.elements.length));
        }

        this.updateElements(element);
    }

    onClick(elements) {
        if (_.isEmpty(this.props.element.elements)) {
            this.props.onClick([this.props.element]);
            
            return;
        }

        let selectedElements = [];
        if (_.isEmpty(elements)) {
            selectedElements = [this.props.element];
        } else {
            selectedElements = [this.props.element, ...elements];
        }
        
        this.props.onClick(selectedElements);
    }

    updateInnerElement(innerElement) {
        let element = this.props.element;
        element[innerElement.index] = innerElement;

        this.updateElements(element);
    }

    updateElements(element) {
        if (this.props.element == element) return;

        let elements = this.props.elements;
        elements[element.index] = element;

        this.props.updateElements(elements);
    }

    renderElement(element) {
        if (!_.isEmpty(this.props.element.theme) && !_.isEmpty(this.props.element.theme.float)) {
            element.theme = { ...element.theme, float: this.props.element.theme.float };
        }

        if (_.isEmpty(element) && !this.props.show) {
            return (
                <span className='middle-center'>
                    Cell
                </span>
            );
        } else if (_.isEmpty(element) && this.props.show) {
            return;
        } else if (element.type == 'button') {
            return <PanelButton show={this.props.show} parentElement={this.props.element} element={element} />;
        } else if (element.type == 'fab') {
            return <PanelFab show={this.props.show} parentElement={this.props.element} element={element} />;
        } else if (element.type == 'checkbox') {
            return <PanelCheckbox show={this.props.show} parentElement={this.props.element} element={element} />;
        } else if (element.type == 'textField') {
            return <PanelTextField show={this.props.show} parentElement={this.props.element} element={element} />;
        } else if (element.type == 'textArea') {
            return <PanelTextArea show={this.props.show} parentElement={this.props.element} element={element} />;
        } else if (element.type == 'select') {
            return <PanelSelect show={this.props.show} parentElement={this.props.element} element={element} updateElement={(element) => this.updateInnerElement(element)} />;
        } else if (element.type == 'image') {
            return <PanelImage show={this.props.show} parentElement={this.props.element} element={element} />;
        } else if (element.type == 'text') {
            return <PanelText show={this.props.show} parentElement={this.props.element} element={element} />;
        } else if (element.type == 'link') {
            return <PanelLink show={this.props.show} parentElement={this.props.element} element={element} />;
        } else if (element.type == 'iconButton') {
            return <PanelIconButton show={this.props.show} parentElement={this.props.element} element={element} />;
        }
    }

    renderElements() {
        let elements = _.isEmpty(this.props.element.elements) ? [{}] : this.props.element.elements;

        return (
            <center className='middle' style={{ width: '100%' }}>
                {elements.map((element, index) => {
                    return (
                        <span key={index} className='panel-element'>
                            {this.renderElement(element)}
                        </span>
                    );
                })}
            </center>
        )
    }

    renderEdit() {
        let theme = _.isEmpty(this.props.element.theme) ? {} : this.props.element.theme;
        let index = this.props.element.index;

        let borderWidth = '';
        if (index == this.props.elements.length - 1) {
            borderWidth = '0 0 0 0';
        } else {
            borderWidth = '0 1px 0 0';
        }

        let selected = this.props.selectedElements[0] == this.props.element;
        let selectedClassName = selected ? 'panel-selected' : 'selectable';

        return (
            <div id={this.props.element.uuid} className={`panel-cell ${selectedClassName}`} style={{ width: `${this.props.element.width}%`, ...theme, ...theme.custom, float: '' }}
                onClick={() => this.onClick(this.props.element.elements)} onDrop={(event) => this.handleDrop(event)}>{/*float is stored on cells then passed down, don't want float actually impacting outer cell though*/}
                <div className='panel-cell-inner' style={{ borderWidth: borderWidth }}>
                    {this.renderElements()}
                </div>
            </div>
        );
    }

    renderShow() {
        let theme = _.isEmpty(this.props.element.theme) ? {} : this.props.element.theme;

        return (
            <span className='panel-cell panel-cell-show' style={{ width: `${this.props.element.width}%`, ...theme, ...theme.custom }}>
                {this.renderElements()}
            </span>
        );
    }

    render() {
        if (this.props.show) {
            return this.renderShow();
        } else {
            return this.renderEdit();
        }
    }
}

PanelCell.propTypes = {
    elements: PropTypes.array,
    element: PropTypes.object,
    draggedItem: PropTypes.string,
    updateElements: PropTypes.func,
    onClick: PropTypes.func,
    selectedElements: PropTypes.array,
    show: PropTypes.bool
};

export default PanelCell;
