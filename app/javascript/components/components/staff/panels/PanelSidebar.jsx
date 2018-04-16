import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

class PanelSidebar extends React.Component {

    render() {
        return (
            <div className='panel-preview-sidebar'>
                <div className='mdc-typography--title' style={{ textAlign: 'center' }}>{_.capitalize(this.props.element.type)} Options</div>
                
                <div className='mdc-typography--body1'>ID: <code>{this.props.element.uuid}</code></div>
            </div>
        );
    }
}

PanelSidebar.propTypes = {
    element: PropTypes.object,
    elements: PropTypes.array
};

export default PanelSidebar;
