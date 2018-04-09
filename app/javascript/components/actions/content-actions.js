import { store } from '../../constants';
import ContentApi from '../../api/content-api';

export const REQUEST_CONTENT = 'REQUEST_CONTENT';
export const RECEIVE_CONTENT = 'RECEIVE_CONTENT';
export const REQUEST_ALL_CONTENT = 'REQUEST_ALL_CONTENT';
export const RECEIVE_ALL_CONTENT = 'RECEIVE_ALL_CONTENT';
export const SET_EDIT = 'SET_EDIT';
export const SET_EDIT_OVERLAY_OPEN = 'SET_EDIT_OVERLAY_OPEN';
export const SET_EDITING_CONTENT = 'SET_EDIT_CONTENT';
export const PUSH_CONTENT_HISTORY = 'PUSH_CONTENT_HISTORY';
export const REQUEST_POP_CONTENT_HISTORY = 'REQUEST_POP_CONTENT_HISTORY';
export const POP_CONTENT_HISTORY = 'POP_CONTENT_HISTORY';

export function pushContentHistory(content) {
    return {
        type: PUSH_CONTENT_HISTORY,
        data: content
    }
}

export function requestPopContent() {
    return {
        type: REQUEST_POP_CONTENT_HISTORY
    }
}

export function updatePoppedContent() {
    return {
        type: POP_CONTENT_HISTORY
    }
}

export function requestContent() {
    return {
        type: REQUEST_CONTENT
    }
}

export function receiveContent(data) {
    return {
        type: RECEIVE_CONTENT,
        data: data
    }
}

export function requestAllContent() {
    return {
        type: REQUEST_ALL_CONTENT
    }
}

export function receiveAllContent(data) {
    return {
        type: RECEIVE_ALL_CONTENT,
        data: data
    }
}

export function fetchAllContent() {

    return function (dispatch) {
        dispatch(requestAllContent());

        ContentApi.getAll().then( data => {
            dispatch(receiveAllContent(data));
        });
    }
}

export function fetchContent(identifier) {

    return function (dispatch) {
        dispatch(requestContent());

        ContentApi.get(identifier).then( data => {
            dispatch(receiveContent(data));
        });
    }
}

export function popContentHistory() {
    return function (dispatch) {
        dispatch(requestPopContent());

        let content = store.getState().content.contentHistory[store.getState().content.contentHistory.length - 1];
        ContentApi.update(content.identifier, content.content).then(() => {
            dispatch(updatePoppedContent());
            dispatch(fetchAllContent());
        });
    }
}

export function setEdit(edit) {
    return {
        type: SET_EDIT,
        data: edit
    }
}

export function setEditOverlayOpen(editOverlayOpen) {
    return {
        type: SET_EDIT_OVERLAY_OPEN,
        data: editOverlayOpen
    }
}

export function setEditingContent(content) {
    return {
        type: SET_EDITING_CONTENT,
        data: content
    }
}
