import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../helpers';
import PanelCell from './PanelCell';

class PanelRow extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `row-${uuid()}`, type: 'row', elements: [] };
    }

    constructor(props) {
        super(props);

        if (!_.isEmpty(this.props.element.elements)) {
            let element = this.props.element;
            element.elements = _.range(0, Object.keys(element.elements).length).map((index) => {
                return element.elements[index];
            });

            this.updateElements(element);
        }
    }

    handleDrop(event) {
        let elements = this.props.elements;
        let element = this.props.element;
        if (this.props.draggedItem == 'cell') {
            if (_.isEmpty(element.elements)) {
                element.elements = [];
            }

            element.elements.push(PanelCell.elementStructure(element.elements.length));
        }

        this.updateElements(element);
    }

    onResizeRelease() {
        if (this.props.selected) {
            let elements = this.props.elements;
            let element = this.props.element;
            let index = Number(element.index);
    
            let deltaHeight = _.round($(`#${this.props.element.uuid}`).height() / window.innerHeight * 100 - Number(element.height), 1);
            element.height = Number(element.height) + deltaHeight;
            elements[index] = element;
    
            if (index + 1 < elements.length) {
                let lowerElement = elements[index + 1];
                lowerElement.height = Number(lowerElement.height) - deltaHeight;
    
                elements[index + 1] = lowerElement;
            }
    
            this.props.updateElements(elements);
        } else {
            this.props.onClick(this.props.element)
        }
    }

    updateInnerElements(innerElements) {
        let element = this.props.element;
        element.elements = innerElements;

        this.updateElements(element);
    }

    updateElements(element) {
        if (this.props.element == element) return;

        let elements = this.props.elements;
        elements[element.index] = element;

        this.props.updateElements(elements);
    }

    renderElements() {
        if (_.isEmpty(this.props.element.elements) || this.props.element.elements.length == 0) {
            return (
                <span className='middle-center'>
                    Row
                </span>
            )
        } else {
            return (
                this.props.element.elements.map((element) => {
                    return (
                        <span key={element.uuid}>
                            <PanelCell elements={this.props.element.elements} element={element} draggedItem={this.props.draggedItem} updateElements={(innerElements) => this.updateInnerElements(innerElements)} />
                        </span>
                    );
                })
            )
        }
    }

    render() {
        let index = this.props.element.index;

        let borderWidth = '1px 0 1px 0';
        if (index == 0 && index == this.props.elements.length - 1) {
            borderWidth = '0 0 0 0';
        } else if (index == 0) {
            borderWidth = '0 0 1px 0';
        } else if (index == this.props.elements.length - 1) {
            borderWidth = '1px 0 0 0';
        }

        let selectedClassName = this.props.selected ? 'panel-row-selected' : 'selectable';
        let lastSelectedClassName =  this.props.selected && this.props.element.index != this.props.elements.length - 1 ? 'panel-row-selected-resizable' : '';

        return (
            <div id={this.props.element.uuid} className={`panel-row ${selectedClassName} ${lastSelectedClassName}`}
                style={{ height: `${this.props.element.height}vh`, borderWidth: borderWidth }} onMouseUp={this.onResizeRelease.bind(this)}
                onDrop={(event) => this.handleDrop(event)}>
                
                {this.renderElements()}
            </div>
        );
    }
}

PanelRow.propTypes = {
    elements: PropTypes.array,
    element: PropTypes.object,
    draggedItem: PropTypes.string,
    updateElements: PropTypes.func,
    onClick: PropTypes.func,
    selected: PropTypes.bool
};

export default PanelRow;
