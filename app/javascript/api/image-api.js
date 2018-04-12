import _ from 'lodash';
import $ from 'jquery';

let ImageApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            $.ajax('/api/images', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(identifier) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/images/${identifier}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(identifier, file) {
        let readId = identifier;
        if (_.isEmpty(readId)) {
            readId = Math.round(Math.random() * 1000000) // TODO: Find a better way to do this
        }
        
        let reader = new FileReader();
        reader.readAsDataURL(file)

        return new Promise((resolve, reject) => {
            reader.onload = (file) => {
                $.ajax('/api/images', {
                    type: 'post',
                    data: { identifier: readId, image: file.target.result.replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, '') },
                    success: resolve,
                    error: reject
                });
            };
        });
    },

    update(identifier, image) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/images/${identifier}`, {
                type: 'patch',
                data: { image: image },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(identifier) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/images/${identifier}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default ImageApi;
