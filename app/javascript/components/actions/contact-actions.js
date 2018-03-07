import ContactApi from '../../api/contact-api';

export const REQUEST_CONTACT = 'REQUEST_CONTACT';
export const RECEIVE_CONTACT = 'RECEIVE_CONTACT';
export const REQUEST_ALL_CONTACTS = 'REQUEST_ALL_CONTACTS';
export const RECEIVE_ALL_CONTACTS = 'RECEIVE_ALL_CONTACTS';

export function requestContactAction() {
    return {
        type: REQUEST_CONTACT
    }
}

export function receiveContactAction(data) {
    return {
        type: RECEIVE_CONTACT,
        data: data
    }
}

export function requestAllContactsAction() {
    return {
        type: REQUEST_ALL_CONTACTS
    }
}

export function receiveAllContactsAction(data) {
    return {
        type: RECEIVE_ALL_CONTACTS,
        data: data
    }
}

export function fetchAllContacts() {

    return function (dispatch) {
        dispatch(requestAllContactsAction());

        ContactApi.getAll().then( data => {
            dispatch(receiveAllContactsAction(data));
        });
    }
}

export function fetchContact(id) {

    return function (dispatch) {
        dispatch(requestContactAction());

        ContactApi.get(id).then( data => {
            dispatch(receiveContactAction(data));
        });
    }
}
