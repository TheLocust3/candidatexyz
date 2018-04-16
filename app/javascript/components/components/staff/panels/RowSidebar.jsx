import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import TextField from '../../base/TextField';

class RowSidebar extends React.Component {

    handleChange(event) {
        let element = this.props.element;
        element[event.target.name] = event.target.value;

        this.props.updateElement(element);
    }

    render() {
        return (
            <div>
                <div className='mdc-typography--body1'><b>ID:</b> <code>{this.props.element.uuid}</code></div>

                <div>
                    <TextField style={{ margin: 0 }} type='number' dense={true} label='Height (%)' name='height' onChange={(event) => this.handleChange(event)} defaultValue={String(this.props.element.height)} />
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
