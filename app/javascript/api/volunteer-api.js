import { volunteerApi } from '../helpers';

let VolunteerApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            volunteerApi('/volunteers', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    getAllBy(pageNumber, recordsPerPage, order, descending) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/volunteers?page_number=${pageNumber}&records_per_page=${recordsPerPage}&order=${order}&descending=${descending}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    getNumberOfPages(recordsPerPage) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/volunteers/number-of-pages?records_per_page=${recordsPerPage}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/volunteers/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(email, phoneNumber, firstName, lastName, address, zipCode, city, state, helpBlurb) {
        return new Promise((resolve, reject) => {
            volunteerApi('/volunteers', {
                type: 'post',
                data: { email: email, phone_number: phoneNumber, first_name: firstName, last_name: lastName, address: address, zipcode: zipCode, city: city, state: state, help_blurb: helpBlurb },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, email, phoneNumber, firstName, lastName, address, zipCode, city, state, helpBlurb) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/volunteers/${id}`, {
                type: 'patch',
                data: { email: email, phone_number: phoneNumber, first_name: firstName, last_name: lastName, address: address, zipcode: zipCode, city: city, state: state, help_blurb: helpBlurb },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/volunteers/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default VolunteerApi;
