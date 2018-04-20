import $ from 'jquery';

let PageApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            $.ajax('/api/pages', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(name) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/pages/${name}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(name, description, url, panels) {
        return new Promise((resolve, reject) => {
            $.ajax('/api/pages', {
                type: 'post',
                data: { name: name, description: description, url: url, panels: panels },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, name, description, url, panels) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/pages/${id}`, {
                type: 'patch',
                data: { name: name, description: description, url: url, panels: panels },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(name) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/pages/${name}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default PageApi;
