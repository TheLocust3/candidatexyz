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

    get(name) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/themes/${name}`, {
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

    update(name, styling) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/themes/${name}`, {
                type: 'patch',
                data: { name: name, styling: styling },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(name) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/themes/${name}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default ThemeApi;
