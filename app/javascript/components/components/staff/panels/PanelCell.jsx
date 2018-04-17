import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../helpers';

class PanelCell extends React.Component {

    static elementStructure(index) {
        return { index: index, uuid: `cell-${uuid()}`, type: 'cell', elements: [] };
    }

    constructor(props) {
        super(props);

        let element = this.props.element;
        element.width = 100.0 / this.props.elements.length;
        this.updateElements(element);
    }

    updateElements(element) {
        if (this.props.element == element) return;

        let elements = this.props.elements;
        elements[element.index] = element;

        this.props.updateElements(elements);
    }

    render() {
        let index = this.props.element.index;

        let borderWidth = '';
        if (index == this.props.elements.length - 1) {
            borderWidth = '0 0 0 0';
        } else {
            borderWidth = '0 1px 0 0';
        }

        return (
            <div id={this.props.element.uuid} className='panel-cell' style={{ width: `${this.props.element.width}%` }}>
                <div className='panel-cell-inner' style={{ borderWidth: borderWidth }}>
                    <span className='middle-center'>
                        Cell
                    </span>
                </div>
            </div>
        );
    }
}

PanelCell.propTypes = {
    elements: PropTypes.array,
    element: PropTypes.object,
    draggedItem: PropTypes.string,
    updateElements: PropTypes.func
};

export default PanelCell;
