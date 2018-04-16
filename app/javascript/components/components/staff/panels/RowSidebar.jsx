import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import TextField from '../../base/TextField';

class RowSidebar extends React.Component {

    render() {
        return (
            <div>
                <div className='mdc-typography--body1'>
                    <b>ID:</b> <code>{this.props.element.uuid}</code>
                </div>

                <div className='mdc-typography--body1'>
                    <b>Height (%):</b> <code>{this.props.element.height}</code>
                </div>
            </div>
        );
    }
}

RowSidebar.propTypes = {
    element: PropTypes.object,
    updateElement: PropTypes.func
};

export default RowSidebar;
