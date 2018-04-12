import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ImageList extends React.Component {

    renderImageList() {
        return (
            this.props.images.map((image) => {
                return (
                    <div key={image.id}>
                        <p>
                            <b>Path:</b> <code>images/{image.identifier}</code>
                        </p>

                        <img className='image-thumbnail' src={`/images/${image.identifier}`} />
                    </div>
                );
            })
        )
    }

    render() {
        return (
            <div className='content-10'>
                <Link to='/staff/images/new'>Upload Image</Link>
                {this.renderImageList()}
            </div>
        );
    }
}

ImageList.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object)
};

export default ImageList;
