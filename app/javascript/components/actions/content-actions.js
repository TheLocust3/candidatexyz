import ContentApi from '../../api/content-api';

export const REQUEST_CONTENT = 'REQUEST_CONTENT';
export const RECEIVE_CONTENT = 'RECEIVE_CONTENT';
export const REQUEST_ALL_CONTENT = 'REQUEST_ALL_CONTENT';
export const RECEIVE_ALL_CONTENT = 'RECEIVE_ALL_CONTENT';
export const TOGGLE_EDIT_CONTENT = 'TOGGLE_EDIT_CONTENT';

export function requestContentAction() {
    return {
        type: REQUEST_CONTENT
    }
}

export function receiveContentAction(data) {
    return {
        type: RECEIVE_CONTENT,
        data: data
    }
}

export function requestAllContentAction() {
    return {
        type: REQUEST_ALL_CONTENT
    }
}

export function receiveAllContentAction(data) {
    return {
        type: RECEIVE_ALL_CONTENT,
        data: data
    }
}

export function fetchAllContent() {

    return function (dispatch) {
        dispatch(requestAllContentAction());

        ContentApi.getAll().then( data => {
            dispatch(receiveAllContentAction(data));
        });
    }
}

export function fetchContent(identifier) {

    return function (dispatch) {
        dispatch(requestContentAction());

        ContentApi.get(identifier).then( data => {
            dispatch(receiveContentAction(data));
        });
    }
}

export function toggleEdit(edit) {
    return {
        type: TOGGLE_EDIT_CONTENT
    }
}
