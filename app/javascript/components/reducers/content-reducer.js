import * as ContentActions from '../actions/content-actions';

import { combineReducers } from 'redux';

const initialState = {
    isReady: false,
    content: {},
    allContent: {},
};

export function contentReducer(state = initialState, action) {
    switch (action.type) {
        case ContentActions.REQUEST_ALL_CONTENT:
        case ContentActions.REQUEST_CONTENT:
            return Object.assign({}, state, {
                isReady: false
            });
        case ContentActions.RECEIVE_CONTENT:
            return Object.assign({}, state, {
                isReady: true,
                content: action.data
            });
        case ContentActions.RECEIVE_ALL_CONTENT:
            return Object.assign({}, state, {
                isReady: true,
                allContent: action.data
            });
        default:
            return state;
    }
}
