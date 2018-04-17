import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import CellSidebar from './CellSidebar';
import TextField from '../../base/TextField';
import Button from '../../base/Button';

class RowSidebar extends React.Component {

    onDeleteClick(event) {
        event.preventDefault();

        let elements = this.props.elements;
        let element = this.props.selectedElements[0];

        elements.splice(element.index, 1);
        elements = elements.map((element, index) => {
            element.index = index;
            return element;
        });

        this.props.updateElement(elements);
        this.props.recalculateHeight();
    }

    updateInnerElements(innerElements) {
        let element = this.props.selectedElements[0];
        element.elements = innerElements;

        this.props.updateElement(element);
    }

    renderSelectedCell() {
        let element = this.props.selectedElements[1];
        if (_.isEmpty(element)) return;

        return (
            <div>
                <div className='mdc-typography--title' style={{ textAlign: 'center' }}>{_.capitalize(element.type)} Options</div>

                <CellSidebar elements={this.props.selectedElements[0].elements} element={element} updateInnerElements={(element) => this.updateInnerElements(element)} />
            </div>
        )
    }

    render() {
        let element = this.props.selectedElements[0]; // TODO: Won't be able to go deeper than one level
        return (
            <div>
                {this.renderSelectedCell()}

                <div className='mdc-typography--title' style={{ textAlign: 'center' }}>{_.capitalize(element.type)} Options</div>

                <center><Button className='red-button' condensed={true} onClick={this.onDeleteClick.bind(this)}>Trash</Button></center><br />

                <div className='mdc-typography--body1'>
                    <b>ID:</b> <code>{element.uuid}</code>
                </div>

                <div className='mdc-typography--body1'>
                    <b>Height (%):</b> <code>{element.height}</code>
                </div>
            </div>
        );
    }
}

RowSidebar.propTypes = {
    elements: PropTypes.array,
    selectedElements: PropTypes.array,
    updateElement: PropTypes.func,
    recalculateHeight: PropTypes.func
};

export default RowSidebar;
