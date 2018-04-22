import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import MDCAutoInit from '../../../global/MDCAutoInit';
import DeleteElementButton from './DeleteElementButton';
import SelectStyler from '../../element-stylers/SelectStyler';
import PanelSelect from '../elements/PanelSelect';
import TextField from '../../../base/TextField';
import Button from '../../../base/Button';
import Fab from '../../../base/Fab';

class SelectSidebar extends React.Component {

    updateElement(element) {
        let elements = this.props.elements;
        elements[element.index] = element;

        this.props.updateInnerElements(elements);
    }

    updateTheme(theme) {
        let element = this.props.element;
        element.theme = theme;

        this.updateElement(element);
    }

    handleChange(event) {
        let element = this.props.element;
        element[event.target.name] = event.target.value;

        this.updateElement(element);
    }

    handleItemChange(event) {
        let elements = this.props.elements;
        let element = this.props.element;

        let item = _.find(element.elements, { uuid: event.target.name });
        item.text = event.target.value;

        element.elements[item.index] = item;
        elements[element.index] = element;

        this.props.updateInnerElements(elements);
    }

    onAddItemClick(event) {
        event.preventDefault();

        let elements = this.props.elements;
        let element = this.props.element;
        element.elements.push(PanelSelect.itemStructure(element.elements.length));

        elements[element.index] = element;

        this.props.updateInnerElements(elements);
    }

    onDeleteItemClick(event, index) {
        event.preventDefault();

        let elements = this.props.elements;
        let element = this.props.element;
        
        element.elements.splice(index, 1);
        element.elements = element.elements.map((element, index) => {
            element.index = index;
            return element;
        });

        elements[element.index] = element;

        this.props.updateInnerElements(elements);
    }

    renderItemEditor() {
        return (
            this.props.element.elements.map((element, index) => {
                return (
                    <div key={element.uuid}>
                        <TextField dense={true} label={`Item ${Number(element.index) + 1}`} name={element.uuid} onChange={(event) => this.handleItemChange(event)} defaultValue={element.text} />

                        <Fab className='material-icons red-button' condensed={true} onClick={(event) => this.onDeleteItemClick(event, element.index)}>
                            <span className='mdc-fab__icon'>
                                delete
                            </span>
                        </Fab>
                    </div>
                )
            })
        );
    }

    render() {
        let element = this.props.element;

        return (
            <div>
                <DeleteElementButton elements={this.props.elements} element={element} updateElements={this.props.updateInnerElements} />
                <br />

                <span className='mdc-typography--body1'>
                    <b>ID:</b> <code>{element.uuid}</code>
                </span><br />

                <TextField dense={true} label='Text' name='text' onChange={(event) => this.handleChange(event)} defaultValue={this.props.element.text} /><br /><br />

                <div className='mdc-typography--subtitle1'>
                    Items
                </div>
                <Button condensed={true} onClick={this.onAddItemClick.bind(this)}>Add</Button>

                <span className='mdc-typography--body1'>
                    {this.renderItemEditor()}
                </span><br />

                <SelectStyler theme={element.theme} updateTheme={(theme) => this.updateTheme(theme)} />
                
                <MDCAutoInit />
            </div>
        );
    }
}

SelectSidebar.propTypes = {
    elements: PropTypes.array,
    element: PropTypes.object,
    updateInnerElements: PropTypes.func
};

export default SelectSidebar;
