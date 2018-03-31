import * as VolunteerActions from '../actions/volunteer-actions';

import { combineReducers } from 'redux';

const initialState = {
    isReady: false,
    volunteer: {},
    volunteers: {},
};

export function volunteerReducer(state = initialState, action) {
    switch (action.type) {
        case VolunteerActions.REQUEST_ALL_VOLUNTEERS:
        case VolunteerActions.REQUEST_VOLUNTEER:
            return Object.assign({}, state, {
                isReady: false
            });
        case VolunteerActions.RECEIVE_VOLUNTEER:
            return Object.assign({}, state, {
                isReady: true,
                contact: action.data
            });
        case VolunteerActions.REQUEST_ALL_VOLUNTEERS:
            return Object.assign({}, state, {
                isReady: true,
                contacts: action.data
            });
        default:
            return state;
    }
}
