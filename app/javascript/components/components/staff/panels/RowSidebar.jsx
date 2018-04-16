import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import TextField from '../../base/TextField';
import Button from '../../base/Button';

class RowSidebar extends React.Component {

    onDeleteClick(event) {
        event.preventDefault();

        let elements = this.props.elements;

        elements.splice(this.props.element.index, 1);
        elements = elements.map((element, index) => {
            element.index = index;
            return element;
        });

        this.props.updateElement(elements);
        this.props.recalculateHeight();
    }

    render() {
        return (
            <div>
                <center><Button className='red-button' condensed={true} onClick={this.onDeleteClick.bind(this)}>Trash</Button></center><br />

                <div className='mdc-typography--body1'>
                    <b>ID:</b> <code>{this.props.element.uuid}</code>
                </div>

                <div className='mdc-typography--body1'>
                    <b>Height (%):</b> <code>{this.props.element.height}</code>
                </div>
            </div>
        );
    }
}

RowSidebar.propTypes = {
    elements: PropTypes.array,
    element: PropTypes.object,
    updateElement: PropTypes.func,
    recalculateHeight: PropTypes.func
};

export default RowSidebar;
