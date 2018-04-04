import $ from 'jquery';

let VolunteerApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            $.ajax('/api/volunteers', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    getAllBy(pageNumber, recordsPerPage) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/volunteers?page_number=${pageNumber}&records_per_page=${recordsPerPage}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    getNumberOfPages(recordsPerPage) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/volunteers/number_of_pages?records_per_page=${recordsPerPage}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/volunteers/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(email, homeNumber, mobileNumber, firstName, lastName, address1, address2, zipCode, city, state, helpBlurb) {
        return new Promise((resolve, reject) => {
            $.ajax('/api/volunteers', {
                type: 'post',
                data: { email: email, home_number: homeNumber, mobile_number: mobileNumber, first_name: firstName, last_name: lastName, address1: address1, address2: address2, zipcode: zipCode, city: city, state: state, help_blurb: helpBlurb },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, email, homeNumber, mobileNumber, firstName, lastName, address1, address2, zipCode, city, state, helpBlurb) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/volunteers/${id}`, {
                type: 'patch',
                data: { email: email, home_number: homeNumber, mobile_number: mobileNumber, first_name: firstName, last_name: lastName, address1: address1, address2: address2, zipcode: zipCode, city: city, state: state, help_blurb: helpBlurb },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/volunteers/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default VolunteerApi;
