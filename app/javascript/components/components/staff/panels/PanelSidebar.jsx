import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import TextField from '../../base/TextField';

class PanelSidebar extends React.Component {

    handleChange(event) {
        let element = this.props.element;
        element[event.target.name] = event.target.value;

        let elements = this.props.elements;
        elements[this.props.element.index] = element;

        this.props.updateElements(elements);
    }

    render() {
        return (
            <div className='panel-preview-sidebar'>
                <div className='mdc-typography--title' style={{ textAlign: 'center' }}>{_.capitalize(this.props.element.type)} Options</div>
                
                <div className='mdc-typography--body1'><b>ID:</b> <code>{this.props.element.uuid}</code></div>

                <div>
                    <TextField style={{ margin: 0 }} type='number' dense={true} label='Height (%)' name='height' onChange={(event) => this.handleChange(event)} defaultValue={String(this.props.element.height)} />
                </div>
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
