import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import RowSidebar from './RowSidebar';
import TextField from '../../base/TextField';

class PanelSidebar extends React.Component {

    updateElement(element) {
        let elements = this.props.elements;
        elements[element.index] = element;

        this.props.updateElements(elements);
    }

    render() {
        return (
            <div className='panel-preview-sidebar'>
                <div className='mdc-typography--title' style={{ textAlign: 'center' }}>{_.capitalize(this.props.element.type)} Options</div>
                
                <RowSidebar elements={this.props.elements} element={this.props.element} updateElement={(element) => this.updateElement(element)} recalculateHeight={this.props.recalculateHeight} />
            </div>
        );
    }
}

PanelSidebar.propTypes = {
    element: PropTypes.object,
    elements: PropTypes.array,
    updateElements: PropTypes.func,
    recalculateHeight: PropTypes.func
};

export default PanelSidebar;
