import $ from 'jquery';

let UserApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            $.ajax('/api/users', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/users/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    getCurrentUser() {
        return new Promise((resolve, reject) => {
            $.ajax('/api/current_user', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/users/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default UserApi
