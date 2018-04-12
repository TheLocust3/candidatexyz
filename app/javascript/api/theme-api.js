import $ from 'jquery';

let ThemeApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            $.ajax('/api/themes', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/themes/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(name, styling) {
        return new Promise((resolve, reject) => {
            $.ajax('/api/themes', {
                type: 'post',
                data: { name: name, styling: styling },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, name, styling) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/themes/${id}`, {
                type: 'patch',
                data: { name: name, styling: styling },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/themes/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default ThemeApi;
