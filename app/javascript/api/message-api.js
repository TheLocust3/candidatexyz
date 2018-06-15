import { volunteerApi } from '../helpers';

let MessageApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            volunteerApi('/messages', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/messages/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(firstName, lastName, email, subject, message) {
        return new Promise((resolve, reject) => {
            volunteerApi('/messages', {
                type: 'post',
                data: { first_name: firstName, last_name: lastName, email: email, subject: subject, message: message },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/messages/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default MessageApi;
