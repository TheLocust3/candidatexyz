import VolunteerApi from '../../api/volunteer-api';

export const REQUEST_VOLUNTEER = 'REQUEST_VOLUNTEER';
export const RECEIVE_VOLUNTEER = 'RECEIVE_VOLUNTEER';
export const REQUEST_ALL_VOLUNTEERS = 'REQUEST_ALL_VOLUNTEERS';
export const RECEIVE_ALL_VOLUNTEERS = 'RECEIVE_ALL_VOLUNTEERS';

export function requestVolunteerAction() {
    return {
        type: REQUEST_VOLUNTEER
    }
}

export function receiveVolunteerAction(data) {
    return {
        type: RECEIVE_VOLUNTEER,
        data: data
    }
}

export function requestAllVolunteersAction() {
    return {
        type: REQUEST_ALL_VOLUNTEERS
    }
}

export function receiveAllVolunteersAction(data) {
    return {
        type: RECEIVE_ALL_VOLUNTEERS,
        data: data
    }
}

export function fetchAllVolunteers() {

    return function (dispatch) {
        dispatch(requestAllVolunteersAction());

        VolunteerApi.getAll().then( data => {
            dispatch(receiveAllVolunteersAction(data));
        });
    }
}

export function fetchVolunteer(id) {

    return function (dispatch) {
        dispatch(requestVolunteerAction());

        VolunteerApi.get(id).then( data => {
            dispatch(receiveVolunteerAction(data));
        });
    }
}
