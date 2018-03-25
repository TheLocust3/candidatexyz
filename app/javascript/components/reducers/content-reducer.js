import * as ContentActions from '../actions/content-actions';

const initialState = {
    isReady: false,
    contents: [],
    edit: false,
    editOverlayOpen: false,
    editingContent: { content: {} }
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
                editingContent: action.data
            });
        default:
            return state;
    }
}
