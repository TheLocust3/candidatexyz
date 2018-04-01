import UserApi from '../../api/user-api';

export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REQUEST_ALL_USERS = 'REQUEST_ALL_USERS';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const REQUEST_CURRENT_USER = 'REQUEST_CURRENT_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export function requestUser() {
    return {
        type: REQUEST_USER
    }
}

export function receiveUser(data) {
    return {
        type: RECEIVE_USER,
        data: data
    }
}

export function requestAllUsers() {
    return {
        type: REQUEST_ALL_USERS
    }
}

export function receiveAllUsers(data) {
    return {
        type: RECEIVE_ALL_USERS,
        data: data
    }
}

export function requestCurrentUserAction() {
    return {
        type: REQUEST_CURRENT_USER
    }
}

export function receiveCurrentUserAction(data) {
    return {
        type: RECEIVE_CURRENT_USER,
        data: data
    }
}

export function fetchUser(identifier) {

    return function (dispatch) {
        dispatch(requestUser());

        UserApi.get(identifier).then( data => {
            dispatch(receiveUser(data));
        });
    }
}

export function fetchAllUsers() {

    return function (dispatch) {
        dispatch(requestAllUsers());

        UserApi.getAll().then( data => {
            dispatch(receiveAllUsers(data));
        });
    }
}


export function fetchCurrentUser() {

    return function (dispatch) {
        dispatch(requestCurrentUserAction());

        UserApi.getCurrentUser().then( data => {
            dispatch(receiveCurrentUserAction(data));
        });
    }
}
