import $ from 'jquery';

let StaffApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            $.ajax('/api/staff', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/staff/${id}`, {
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

    update(id, email, firstName, lastName, admin) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/staff/${id}`, {
                type: 'patch',
                data: { email: email, first_name: firstName, last_name: lastName, admin: admin },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/staff/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default StaffApi
