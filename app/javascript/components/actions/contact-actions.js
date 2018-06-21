import { ContactApi } from 'candidatexyz-common-js';

export const REQUEST_CONTACT = 'REQUEST_CONTACT';
export const RECEIVE_CONTACT = 'RECEIVE_CONTACT';
export const REQUEST_ALL_CONTACTS = 'REQUEST_ALL_CONTACTS';
export const RECEIVE_ALL_CONTACTS = 'RECEIVE_ALL_CONTACTS';

export function requestContact() {
    return {
        type: REQUEST_CONTACT
    }
}

export function receiveContact(data) {
    return {
        type: RECEIVE_CONTACT,
        data: data
    }
}

export function requestAllContacts() {
    return {
        type: REQUEST_ALL_CONTACTS
    }
}

export function receiveAllContacts(data) {
    return {
        type: RECEIVE_ALL_CONTACTS,
        data: data
    }
}

export function fetchAllContacts() {

    return function (dispatch) {
        dispatch(requestAllContacts());

        ContactApi.getAll().then( data => {
            dispatch(receiveAllContacts(data));
        });
    }
}

export function fetchContact(id) {

    return function (dispatch) {
        dispatch(requestContact());

        ContactApi.get(id).then( data => {
            dispatch(receiveContact(data));
        });
    }
}
