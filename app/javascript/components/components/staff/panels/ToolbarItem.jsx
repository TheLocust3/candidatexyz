import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

class ToolbarItem extends React.Component {

    handleDrag(event) {
        this.props.onDrag(event.target.id);
    }

    render() {
        return (
            <div id={this.props.name} className='toolbar-item' onDragStart={this.handleDrag.bind(this)}  draggable={true}>
                <i className='material-icons'>{this.props.icon}</i>

                <div>
                    {this.props.label}
                </div>
            </div>
        );
    }
}

ToolbarItem.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onDrag: PropTypes.func
};

export default ToolbarItem;
