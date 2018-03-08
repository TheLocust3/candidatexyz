import $ from 'jquery';

let ContentApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            $.ajax('/api/content', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/content/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(type, identifier, content) {
        return new Promise((resolve, reject) => {
            $.ajax('/api/content', {
                type: 'post',
                data: { type: type, identifier: identifier, content: content },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, content) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/content/${id}`, {
                type: 'patch',
                data: { content: content },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/content/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default ContentApi;
