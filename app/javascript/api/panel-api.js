import $ from 'jquery';

let PanelApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            $.ajax('/api/panels', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(name) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/panels/${name}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(name, description, elements, styling) {
        return new Promise((resolve, reject) => {
            $.ajax('/api/panels', {
                type: 'post',
                data: { name: name, description: description, elements: elements, styling: styling },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, name, description, elements, styling) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/panels/${id}`, {
                type: 'patch',
                data: { name: name, description: description, elements: elements, styling: styling },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(name) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/panels/${name}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default PanelApi;
