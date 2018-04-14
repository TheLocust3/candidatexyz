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

    create(name, description, classNamePrefix, styling) {
        return new Promise((resolve, reject) => {
            $.ajax('/api/themes', {
                type: 'post',
                data: { name: name, description: description, class_name_prefix: classNamePrefix, styling: styling },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, name, description, classNamePrefix, styling) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/themes/${id}`, {
                type: 'patch',
                data: { name: name, description: description, class_name_prefix: classNamePrefix, styling: styling },
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
