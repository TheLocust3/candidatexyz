import _ from 'lodash';
import $ from 'jquery';

import { uuid } from '../helpers';

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
            readId = uuid();
        }
        
        let reader = new FileReader();
        reader.readAsDataURL(file)

        return new Promise((resolve, reject) => {
            reader.onload = (file) => {
                let image = file.target.result;
                image = image.substring(image.indexOf('base64,') + 7, image.length);
                
                $.ajax('/api/images', {
                    type: 'post',
                    data: { identifier: readId, image: image },
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

    destroy(id) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/images/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default ImageApi;
