import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../helpers';

class PanelRow extends React.Component {

    static elementStructure(index) {
        return { index: index, type: 'row' }
    }

    constructor(props) {
        super(props);

        this.state = { element: this.props.element };

        if (_.isEmpty(this.state.element.uuid)) { // element is uninitialized
            this.state.element.uuid = `row-${uuid()}`;
        }
    }

    componentDidMount() {
        this.updateElements();
    }

    updateElements() {
        let elements = this.props.elements;
        if (elements[this.props.element.index] == this.props.element) return;

        elements[this.props.element.index] = this.props.element;

        this.props.updateElements(elements);
    }

    render() {
        let index = this.state.element.index;
        let borderWidth = '1px 0 1px 0';
        if (index == 0 && index == this.props.elements.length - 1) {
            borderWidth = '0 0 0 0';
        } else if (index == 0) {
            borderWidth = '0 0 1px 0';
        } else if (index == this.props.elements.length - 1) {
            borderWidth = '1px 0 0 0';
        }

        return (
            <div id={this.state.element.uuid} className='panel-row selectable' style={{ height: `${this.state.element.height}vh`, borderWidth: borderWidth }} onClick={() => this.props.onClick(this.props.element)}>
                <span className='middle-center'>
                    Row
                </span>
            </div>
        );
    }
}

PanelRow.propTypes = {
    elements: PropTypes.array,
    element: PropTypes.object,
    draggedItem: PropTypes.string,
    updateElements: PropTypes.func,
    onClick: PropTypes.func
};

export default PanelRow;
