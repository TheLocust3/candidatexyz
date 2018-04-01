import * as UserActions from '../actions/user-actions';

import { combineReducers } from 'redux';

const initialState = {
    isReady: false,
    currentUser: {},
    user: {},
    users: []
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case UserActions.REQUEST_USER:
        case UserActions.REQUEST_ALL_USERS:
        case UserActions.REQUEST_CURRENT_USER:
            return Object.assign({}, state, {
                isReady: false
            });
        case UserActions.RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {
                isReady: true,
                currentUser: action.data
            });
        case UserActions.RECEIVE_USER:
            return Object.assign({}, state, {
                isReady: true,
                user: action.data
            });
        case UserActions.RECEIVE_ALL_USERS:
            return Object.assign({}, state, {
                isReady: true,
                users: action.data
            });
        default:
            return state;
    }
}
