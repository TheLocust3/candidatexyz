import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

import { uuid } from '../../../helpers';
import Button from '../base/Button';
import ImageApi from '../../../api/image-api';

class ImageUploader extends React.Component {

    handleImageUpload(event) {
        let identifier = uuid();
        ImageApi.create(identifier, event.target.files[0]).then((response) => {
            this.props.handleUpload(`/images/${identifier}`);
        });
    }

    onClick(event) {
        event.preventDefault();

        $('#image-uploader').click();
    }

    render() {
        let { handleUpload, styleOuter, ...props } = this.props;

        return (
            <div style={styleOuter}>
                <input type='file' accept='image/*' id='image-uploader' onChange={this.handleImageUpload.bind(this)} style={{ display: 'none' }} />

                <Button onClick={this.onClick.bind(this)} {...props}>Upload</Button>
            </div>
        );
    }
}

ImageUploader.propTypes = {
    handleUpload: PropTypes.func.isRequired,
    styleOuter: PropTypes.object
};

export default ImageUploader;
