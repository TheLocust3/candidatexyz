import * as MessageActions from '../actions/message-actions';

import { combineReducers } from 'redux';

const initialState = {
    isReady: false,
    message: {},
    messages: [],
};

export function messageReducer(state = initialState, action) {
    switch (action.type) {
        case MessageActions.REQUEST_ALL_MESSAGES:
        case MessageActions.REQUEST_MESSAGE:
            return Object.assign({}, state, {
                isReady: false
            });
        case MessageActions.RECEIVE_MESSAGE:
            return Object.assign({}, state, {
                isReady: true,
                message: action.data
            });
        case MessageActions.RECEIVE_ALL_MESSAGES:
            return Object.assign({}, state, {
                isReady: true,
                messages: action.data
            });
        default:
            return state;
    }
}
