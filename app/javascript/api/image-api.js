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

    create(identifier, image) {
        return new Promise((resolve, reject) => {
            $.ajax('/api/images', {
                type: 'post',
                data: { identifier: identifier, image: image },
                success: resolve,
                error: reject
            });
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
