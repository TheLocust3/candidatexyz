import { MessageApi } from 'candidatexyz-common-js';

export const REQUEST_MESSAGE = 'REQUEST_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REQUEST_ALL_MESSAGES = 'REQUEST_ALL_MESSAGES';
export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';

export function requestMessage() {
    return {
        type: REQUEST_MESSAGE
    }
}

export function receiveMessage(data) {
    return {
        type: RECEIVE_MESSAGE,
        data: data
    }
}

export function requestAllMessages() {
    return {
        type: REQUEST_ALL_MESSAGES
    }
}

export function receiveAllMessages(data) {
    return {
        type: RECEIVE_ALL_MESSAGES,
        data: data
    }
}

export function fetchAllMessages() {

    return function (dispatch) {
        dispatch(requestAllMessages());

        MessageApi.getAll().then( data => {
            dispatch(receiveAllMessages(data));
        });
    }
}

export function fetchMessage(id) {

    return function (dispatch) {
        dispatch(requestMessage());

        MessageApi.get(id).then( data => {
            dispatch(receiveMessage(data));
        });
    }
}
