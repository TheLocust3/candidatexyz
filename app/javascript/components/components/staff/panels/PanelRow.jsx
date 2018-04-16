import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../../helpers';

class PanelRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = { elements: this.props.elements, element: this.props.element };
        this.state.element.height = this.props.totalHeight / this.state.elements.length;

        if (_.isEmpty(this.state.element.uuid)) { // element is uninitialized
            this.state.element.uuid = `row-${uuid()}`;
        }
    }

    componentDidMount() {
        this.updateElements();
    }

    static elementStructure(index) {
        return { index: index }
    }

    updateElements() {
        let elements = this.state.elements;
        if (elements[this.props.element.index] == this.props.element) return;

        elements[this.props.element.index] = this.props.element;
        this.setState({
            elements: elements
        });

        this.props.updateElements(elements);
    }

    render() {
        let index = this.state.element.index;
        let borderWidth = '1px 0 1px 0';
        if (index == 0 && index == this.state.elements.length - 1) {
            borderWidth = '0 0 0 0';
        } else if (index == 0) {
            borderWidth = '0 0 1px 0';
        } else if (index == this.state.elements.length - 1) {
            borderWidth = '1px 0 0 0';
        }

        return (
            <div id={this.state.element.uuid} className='panel-row' style={{ height: `${this.state.element.height}vh`, borderWidth: borderWidth }}>
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
    totalHeight: PropTypes.number,
    updateElements: PropTypes.func
};

export default PanelRow;
