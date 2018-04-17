import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import TextField from '../../../base/TextField';
import Button from '../../../base/Button';
import ButtonSidebar from './ButtonSidebar';

class CellSidebar extends React.Component {

    onDeleteClick(event) {
        event.preventDefault();

        let elements = this.props.elements;

        elements.splice(this.props.selectedElements[0].index, 1);
        elements = elements.map((element, index) => {
            element.index = index;
            return element;
        });

        this.props.updateInnerElements(elements);
    }

    updateInnerElements(innerElements) {
        let elements = this.props.elements;
        let element = this.props.selectedElements[0];
        
        elements[element.index].elements = innerElements;

        this.props.updateInnerElements(elements);
    }

    renderInnerSidebar() {
        let element = this.props.selectedElements[1];
        if (_.isEmpty(element)) return;

        return (
            <div>
                <div className='mdc-typography--title' style={{ textAlign: 'center' }}>{_.capitalize(element.type)} Options</div>

                <ButtonSidebar elements={this.props.selectedElements[0].elements} element={element} updateInnerElements={(elements) => this.updateInnerElements(elements)} />
            </div>
        )
    }

    render() {
        let element = this.props.selectedElements[0];

        return (
            <div>
                {this.renderInnerSidebar()}
                
                <div className='mdc-typography--title' style={{ textAlign: 'center' }}>{_.capitalize(element.type)} Options</div>

                <center><Button className='red-button' condensed={true} onClick={this.onDeleteClick.bind(this)}>Trash</Button></center><br />

                <div className='mdc-typography--body1'>
                    <b>ID:</b> <code>{element.uuid}</code>
                </div>
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
