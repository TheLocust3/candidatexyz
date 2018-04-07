import ContentApi from '../../api/content-api';

export const REQUEST_CONTENT = 'REQUEST_CONTENT';
export const RECEIVE_CONTENT = 'RECEIVE_CONTENT';
export const REQUEST_ALL_CONTENT = 'REQUEST_ALL_CONTENT';
export const RECEIVE_ALL_CONTENT = 'RECEIVE_ALL_CONTENT';
export const SET_EDIT = 'SET_EDIT';
export const SET_EDIT_OVERLAY_OPEN = 'SET_EDIT_OVERLAY_OPEN';
export const SET_EDITING_CONTENT = 'SET_EDIT_CONTENT';

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
