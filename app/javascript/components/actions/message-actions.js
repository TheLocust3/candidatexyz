import MessageApi from '../../api/message-api';

export const REQUEST_MESSAGE = 'REQUEST_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REQUEST_ALL_MESSAGES = 'REQUEST_ALL_MESSAGES';
export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';

export function requestMessageAction() {
    return {
        type: REQUEST_MESSAGE
    }
}

export function receiveMessageAction(data) {
    return {
        type: RECEIVE_MESSAGE,
        data: data
    }
}

export function requestAllMessagesAction() {
    return {
        type: REQUEST_ALL_MESSAGES
    }
}

export function receiveAllMessagesAction(data) {
    return {
        type: RECEIVE_ALL_MESSAGES,
        data: data
    }
}

export function fetchAllMessages() {

    return function (dispatch) {
        dispatch(requestAllMessagesAction());

        MessageApi.getAll().then( data => {
            dispatch(receiveAllMessagesAction(data));
        });
    }
}

export function fetchMessage(id) {

    return function (dispatch) {
        dispatch(requestMessageAction());

        MessageApi.get(id).then( data => {
            dispatch(receiveMessageAction(data));
        });
    }
}
