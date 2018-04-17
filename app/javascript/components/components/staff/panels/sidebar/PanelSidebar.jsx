import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import RowSidebar from './RowSidebar';
import TextField from '../../../base/TextField';

class PanelSidebar extends React.Component {

    updateElement(element) {
        let elements = this.props.elements;
        elements[element.index] = element;

        this.props.updateElements(elements);
    }

    render() {
        return (
            <div className='panel-preview-sidebar'>
                <RowSidebar elements={this.props.elements} selectedElements={this.props.selectedElements} updateElement={(element) => this.updateElement(element)} recalculateHeight={this.props.recalculateHeight} />
            </div>
        );
    }
}

PanelSidebar.propTypes = {
    selectedElements: PropTypes.array,
    elements: PropTypes.array,
    updateElements: PropTypes.func,
    recalculateHeight: PropTypes.func
};

export default PanelSidebar;
