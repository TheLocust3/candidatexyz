import { DOMAIN } from '../constants';
import { userApi } from '../helpers';

let StaffApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            userApi('/staff', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            userApi(`/staff/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    createToken(email) {
        return new Promise((resolve, reject) => {
            userApi(`/staff/create_invite`, {
                type: 'post',
                data: { email: email, url: `${DOMAIN}/staff/sign-up/` },
                success: resolve,
                error: reject
            });
        });
    },

    create(token, email, firstName, lastName, password, passwordConfirmation) {
        return new Promise((resolve, reject) => {
            userApi(`/staff`, {
                type: 'post',
                data: { token: token, email: email, first_name: firstName, last_name: lastName, password: password, password_confirmation: passwordConfirmation },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, email, firstName, lastName, admin) {
        return new Promise((resolve, reject) => {
            userApi(`/staff/${id}`, {
                type: 'patch',
                data: { email: email, first_name: firstName, last_name: lastName, admin: admin },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            userApi(`/staff/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default StaffApi
