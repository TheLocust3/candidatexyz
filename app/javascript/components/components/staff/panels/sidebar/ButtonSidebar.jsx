import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import MDCAutoInit from '../../../global/MDCAutoInit';
import TextField from '../../../base/TextField';
import Button from '../../../base/Button';

class ButtonSidebar extends React.Component {

    onDeleteClick(event) {
        event.preventDefault();

        let elements = this.props.elements;

        elements.splice(this.props.element.index, 1);
        elements = elements.map((element, index) => {
            element.index = index;
            return element;
        });

        this.props.updateInnerElements(elements);
    }

    handleChange(event) {
        let elements = this.props.elements;

        let element = this.props.element;
        element[event.target.name] = event.target.value;

        elements[element.index] = element;

        this.props.updateInnerElements(elements);
    }

    render() {
        let element = this.props.element;

        return (
            <div>
                <center><Button className='red-button' condensed={true} onClick={this.onDeleteClick.bind(this)}>Trash</Button></center><br />

                <span className='mdc-typography--body1'>
                    <b>ID:</b> <code>{element.uuid}</code>
                </span>

                <TextField dense={true} label='Text' name='text' onChange={(event) => this.handleChange(event)} defaultValue={this.props.element.text} />
                
                <MDCAutoInit />
            </div>
        );
    }
}

ButtonSidebar.propTypes = {
    elements: PropTypes.array,
    element: PropTypes.object,
    updateInnerElements: PropTypes.func
};

export default ButtonSidebar;
