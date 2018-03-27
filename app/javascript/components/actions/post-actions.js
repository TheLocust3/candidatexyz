import PostApi from '../../api/post-api';

export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REQUEST_ALL_POST_TYPE = 'REQUEST_ALL_POST_TYPE';
export const RECEIVE_ALL_POST_TYPE = 'RECEIVE_ALL_POST_TYPE';

export function requestPostAction() {
    return {
        type: REQUEST_POST
    }
}

export function receivePostAction(data) {
    return {
        type: RECEIVE_POST,
        data: data
    }
}

export function requestAllPostTypeAction() {
    return {
        type: REQUEST_ALL_POST_TYPE
    }
}

export function receiveAllPostTypeAction(data) {
    return {
        type: RECEIVE_ALL_POST_TYPE,
        data: data
    }
}

export function fetchPostType(postType) {

    return function (dispatch) {
        dispatch(requestAllPostTypeAction());

        PostApi.getType(postType).then( data => {
            dispatch(receiveAllPostTypeAction(data));
        });
    }
}

export function fetchPost(postType, url) {

    return function (dispatch) {
        dispatch(requestPostAction());

        PostApi.get(postType, url).then( data => {
            dispatch(receivePostAction(data));
        });
    }
}
