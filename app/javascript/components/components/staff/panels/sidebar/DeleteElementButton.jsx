import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../base/Button';

class DeleteButton extends React.Component {

    onDeleteClick(event) {
        event.preventDefault();

        let elements = this.props.elements;
        let element = this.props.element;

        elements.splice(element.index, 1);
        elements = elements.map((element, index) => {
            element.index = index;
            return element;
        });

        this.props.updateElements(elements);

        if (!_.isUndefined(this.props.onClick)) {
            this.props.onClick(event);
        }
    }

    render() {
        return (
            <center>
                <Button className='red-button' condensed={true} onClick={this.onDeleteClick.bind(this)}>Trash</Button>
            </center>
        );
    }
}

DeleteButton.propTypes = {
    elements: PropTypes.array.isRequired,
    element: PropTypes.object.isRequired,
    updateElements: PropTypes.func.isRequired,
    onClick: PropTypes.func
};

export default DeleteButton;
