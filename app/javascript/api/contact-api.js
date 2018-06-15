import { volunteerApi } from '../helpers';

let ContactApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            volunteerApi('/contacts', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/contacts/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(email, zipCode, firstName, lastName, phoneNumber) {
        return new Promise((resolve, reject) => {
            volunteerApi('/contacts', {
                type: 'post',
                data: { email: email, zipcode: zipCode, first_name: firstName, last_name: lastName, phone_number: phoneNumber },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, email, zipCode, firstName, lastName, phoneNumber) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/contacts/${id}`, {
                type: 'patch',
                data: { email: email, zipcode: zipCode, first_name: firstName, last_name: lastName, phone_number: phoneNumber },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/contacts/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    },

    unsubscribe(token) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/contacts/unsubscribe?token=${token}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default ContactApi;
