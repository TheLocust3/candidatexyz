import React from 'react';
import PropTypes from 'prop-types';

class EditContentWrapper extends React.Component {

    render() {
        return (
            <div className='editContentWrapper'>
                {this.props.children}
            </div>
        );
    }
}

EditContentWrapper.propTypes = {
    children: PropTypes.element.isRequired
};

export default EditContentWrapper;
