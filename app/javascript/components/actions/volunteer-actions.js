import { VolunteerApi } from 'candidatexyz-common-js';

export const REQUEST_VOLUNTEER = 'REQUEST_VOLUNTEER';
export const RECEIVE_VOLUNTEER = 'RECEIVE_VOLUNTEER';
export const REQUEST_ALL_VOLUNTEERS = 'REQUEST_ALL_VOLUNTEERS';
export const RECEIVE_ALL_VOLUNTEERS = 'RECEIVE_ALL_VOLUNTEERS';

export function requestVolunteer() {
    return {
        type: REQUEST_VOLUNTEER
    }
}

export function receiveVolunteer(data) {
    return {
        type: RECEIVE_VOLUNTEER,
        data: data
    }
}

export function requestAllVolunteers() {
    return {
        type: REQUEST_ALL_VOLUNTEERS
    }
}

export function receiveAllVolunteers(data) {
    return {
        type: RECEIVE_ALL_VOLUNTEERS,
        data: data
    }
}

export function fetchAllVolunteers() {

    return function (dispatch) {
        dispatch(requestAllVolunteers());

        VolunteerApi.getAll().then( data => {
            dispatch(receiveAllVolunteers(data));
        });
    }
}

export function fetchAllVolunteersBy(pageNumber, recordsPerPage, order, descending) {

    return function (dispatch) {
        dispatch(requestAllVolunteers());

        VolunteerApi.getAllBy(pageNumber, recordsPerPage, order, descending).then( data => {
            dispatch(receiveAllVolunteers(data));
        });
    }
}

export function fetchVolunteer(id) {

    return function (dispatch) {
        dispatch(requestVolunteer());

        VolunteerApi.get(id).then( data => {
            dispatch(receiveVolunteer(data));
        });
    }
}
