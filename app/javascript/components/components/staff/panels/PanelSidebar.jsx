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
                
                <RowSidebar element={this.props.element} updateElement={(element) => this.updateElement(element)} />
            </div>
        );
    }
}

PanelSidebar.propTypes = {
    element: PropTypes.object,
    elements: PropTypes.array,
    updateElements: PropTypes.func
};

export default PanelSidebar;
