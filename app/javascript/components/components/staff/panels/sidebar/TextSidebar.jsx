import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import MDCAutoInit from '../../../global/MDCAutoInit';
import CustomStyler from '../../../global/CustomStyler';
import TextField from '../../../base/TextField';
import Button from '../../../base/Button';

class TextSidebar extends React.Component {

    constructor(props) {
        super(props);

        if (_.isEmpty(this.props.element.theme)) {
            let element = this.props.element;
            element.theme = {};

            this.updateElement(element);
        }
    }

    updateElement(element) {
        let elements = this.props.elements;
        elements[element.index] = element;

        this.props.updateInnerElements(elements);
    }

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
        let element = this.props.element;
        element[event.target.name] = event.target.value;

        this.updateElement(element);
    }

    handleThemeChange(value, attribute, suffix) {
        let element = this.props.element;

        if (_.isUndefined(suffix)) {
            element.theme[attribute] = value;
        } else {
            element.theme[attribute] = value + suffix;
        }

        this.updateElement(element);
    }
    
    render() {
        let element = this.props.element;

        return (
            <div>
                <center><Button className='red-button' condensed={true} onClick={this.onDeleteClick.bind(this)}>Trash</Button></center><br />

                <span className='mdc-typography--body1'>
                    <b>ID:</b> <code>{element.uuid}</code>
                </span><br />

                <TextField dense={true} label='Text' name='text' onChange={(event) => this.handleChange(event)} defaultValue={element.text} />
                <br />

                <CustomStyler small={true} custom={element.theme.custom} onChange={(custom) => { this.handleThemeChange(custom, 'custom') }} />
                
                <MDCAutoInit />
            </div>
        );
    }
}

TextSidebar.propTypes = {
    elements: PropTypes.array,
    element: PropTypes.object,
    updateInnerElements: PropTypes.func
};

export default TextSidebar;
