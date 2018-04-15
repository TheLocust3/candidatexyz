import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import ImageApi from '../../../api/image-api';
import Fab from '../base/Fab';

class ImageList extends React.Component {

    onDeleteClick(event, name) {
        ImageApi.destroy(name).then(() => {
            location.href = '/staff/images';
        });
    }

    renderImageList() {
        return (
            this.props.images.map((image) => {
                return (
                    <div key={image.id}>
                        <p>
                            <b>Path:</b> <code>images/{image.identifier}</code>
                        </p>

                        <div className='relative'>
                            <img className='image-thumbnail' src={`/images/${image.identifier}`} />

                            <Fab className='middle' condensed={true} onClick={(event) => this.onDeleteClick(event, image.id)} style={{ marginLeft: '5%' }}>
                                <i className='material-icons'>delete</i>
                            </Fab>
                        </div>
                    </div>
                );
            })
        )
    }

    render() {
        return (
            <div className='content-10'>
                {this.renderImageList()}
            </div>
        );
    }
}

ImageList.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object)
};

export default ImageList;
