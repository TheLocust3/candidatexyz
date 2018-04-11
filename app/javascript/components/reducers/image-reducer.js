import * as ImageActions from '../actions/image-actions';

import { combineReducers } from 'redux';

const initialState = {
    isReady: false,
    image: {},
    images: []
};

export function imageReducer(state = initialState, action) {
    switch (action.type) {
        case ImageActions.REQUEST_ALL_IMAGES:
        case ImageActions.RECEIVE_IMAGE:
            return Object.assign({}, state, {
                isReady: false
            });
        case ImageActions.RECEIVE_IMAGE:
            return Object.assign({}, state, {
                isReady: true,
                image: action.data
            });
        case ImageActions.RECEIVE_ALL_IMAGES:
            return Object.assign({}, state, {
                isReady: true,
                images: action.data
            });
        default:
            return state;
    }
}
