import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../base/Header';
import DeleteElementButton from './DeleteElementButton';
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

                <Header type='headline6' style={{ textAlign: 'center' }}>{_.capitalize(element.type)} Options</Header>

                <DeleteElementButton elements={this.props.elements} element={this.props.selectedElements[0]} updateElements={this.props.updateElement} onClick={() => this.props.recalculateHeight()} />
                <br />

                <Header type='body1'>
                    <b>ID:</b> <code>{element.uuid}</code>
                </Header>

                <Header type='body1'>
                    <b>Height (%):</b> <code>{element.height}</code>
                </Header>

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
