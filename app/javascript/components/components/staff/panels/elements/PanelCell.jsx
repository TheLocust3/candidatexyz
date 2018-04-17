import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../../helpers';
import PanelButton from './PanelButton';
import PanelFab from './PanelFab';

class PanelCell extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `cell-${uuid()}`, type: 'cell', elements: [] };
    }

    constructor(props) {
        super(props);

        let element = this.props.element;
        element.width = 100.0 / this.props.elements.length;
        this.updateElements(element);

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

        if (_.isEmpty(element.elements)) {
            element.elements = [];
        }

        if (this.props.draggedItem == 'button') {
            element.elements.push(PanelButton.elementStructure(element.elements.length));
        } else if (this.props.draggedItem == 'fab') {
            element.elements.push(PanelFab.elementStructure(element.elements.length));
        }

        this.updateElements(element);
    }

    onClick(element) {
        if (_.isEmpty(this.props.element.elements)) {
            this.props.onClick([this.props.element]);
            
            return;
        }

        let selectedElements = [];
        if (_.isEmpty(element)) {
            selectedElements = [this.props.element];
        } else {
            selectedElements = [this.props.element, element];
        }
        
        this.props.onClick(selectedElements);
    }

    updateElements(element) {
        if (this.props.element == element) return;

        let elements = this.props.elements;
        elements[element.index] = element;

        this.props.updateElements(elements);
    }

    renderElements() {
        if (_.isEmpty(this.props.element.elements)) {
            return (
                <span className='middle-center'>
                    Cell
                </span>
            );
        } else if (this.props.element.elements[0].type == 'button') {
            return (
                <PanelButton parentElement={this.props.element} element={this.props.element.elements[0]} />
            );
        } else if (this.props.element.elements[0].type == 'fab') {
            return (
                <PanelFab parentElement={this.props.element} element={this.props.element.elements[0]} />
            );
        }
    }

    render() {
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
            <div id={this.props.element.uuid} className={`panel-cell ${selectedClassName}`} style={{ width: `${this.props.element.width}%` }}
                onClick={() => this.onClick(...this.props.element.elements)} onDrop={(event) => this.handleDrop(event)}>
                <div className='panel-cell-inner' style={{ borderWidth: borderWidth }}>
                    {this.renderElements()}
                </div>
            </div>
        );
    }
}

PanelCell.propTypes = {
    elements: PropTypes.array,
    element: PropTypes.object,
    draggedItem: PropTypes.string,
    updateElements: PropTypes.func,
    onClick: PropTypes.func,
    selectedElements: PropTypes.array
};

export default PanelCell;
