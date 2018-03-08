import * as ContentActions from '../actions/content-actions';

import { combineReducers } from 'redux';

const initialState = {
    isReady: false,
    content: {},
    contents: {},
};

export function contentReducer(state = initialState, action) {
    switch (action.type) {
        case ContentActions.REQUEST_ALL_CONTACTS:
        case ContentActions.REQUEST_CONTACT:
            return Object.assign({}, state, {
                isReady: false
            });
        case ContentActions.RECEIVE_CONTACT:
            return Object.assign({}, state, {
                isReady: true,
                content: action.data
            });
        case ContentActions.RECEIVE_ALL_CONTACTS:
            return Object.assign({}, state, {
                isReady: true,
                content: action.data
            });
        default:
            return state;
    }
}
