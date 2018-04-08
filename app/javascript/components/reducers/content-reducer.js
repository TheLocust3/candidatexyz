import _ from 'lodash';

import * as ContentActions from '../actions/content-actions';

const initialState = {
    isReady: false,
    contents: [],
    edit: false,
    editOverlayOpen: false,
    editingContent: { content: {} },
    contentHistory: []
};

export function contentReducer(state = initialState, action) {
    switch (action.type) {
        case ContentActions.REQUEST_POP_CONTENT_HISTORY:
        case ContentActions.REQUEST_ALL_CONTENT:
        case ContentActions.REQUEST_CONTENT:
            return Object.assign({}, state, {
                isReady: false
            });
        case ContentActions.RECEIVE_CONTENT:
            return Object.assign({}, state, {
                isReady: true,
                contents: [...state.contents, action.data]
            });
        case ContentActions.RECEIVE_ALL_CONTENT:
            return Object.assign({}, state, {
                isReady: true,
                contents: action.data
            });
        case ContentActions.SET_EDIT:
            return Object.assign({}, state, {
                edit: action.data
            });
        case ContentActions.SET_EDIT_OVERLAY_OPEN:
            return Object.assign({}, state, {
                editOverlayOpen: action.data
            });
        case ContentActions.SET_EDITING_CONTENT:
            return Object.assign({}, state, {
                editingContent: action.data,
                editOverlayOpen: true
            });
        case ContentActions.PUSH_CONTENT_HISTORY:
            return Object.assign({}, state, {
                contentHistory: [...state.contentHistory, action.data]
            });
        case ContentActions.POP_CONTENT_HISTORY:
            let contentHistory = _.slice(state.contentHistory, 0, state.contentHistory.length - 1);

            return Object.assign({}, state, {
                contentHistory: contentHistory,
                isReady: true
            });
        default:
            return state;
    }
}
