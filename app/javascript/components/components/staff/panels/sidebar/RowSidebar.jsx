import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import ColorPicker from '../../../global/ColorPicker';
import CustomStyler from '../../../global/CustomStyler';
import CellSidebar from './CellSidebar';
import Button from '../../../base/Button';

class RowSidebar extends React.Component {

    handleThemeChange(value, attribute) {
        let element = this.props.selectedElements[0];

        element.theme = _.isEmpty(element.theme) ? {} : element.theme;
        element.theme[attribute] = value;

        this.props.updateElement(element);
    }

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
        let selectedElements = _.clone(this.props.selectedElements).splice(1, this.props.selectedElements.length - 1);
        if (_.isEmpty(selectedElements)) return;

        return (
            <CellSidebar elements={this.props.selectedElements[0].elements} selectedElements={selectedElements} updateInnerElements={(element) => this.updateInnerElements(element)} />
        )
    }

    render() {
        let element = this.props.selectedElements[0];
        let theme = _.isEmpty(element.theme) ? {} : element.theme;

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

                <ColorPicker label='Pick Color' color={theme.backgroundColor} onChange={(color) => this.handleThemeChange(color.hex, 'backgroundColor')} />
                <CustomStyler small={true} custom={theme.custom} onChange={(custom) => { this.handleThemeChange(custom, 'custom') }} />
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
