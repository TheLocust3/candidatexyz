import PostApi from '../../api/post-api';

export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REQUEST_ALL_POST_TYPE = 'REQUEST_ALL_POST_TYPE';
export const RECEIVE_ALL_POST_TYPE = 'RECEIVE_ALL_POST_TYPE';

export function requestPost() {
    return {
        type: REQUEST_POST
    }
}

export function receivePost(data) {
    return {
        type: RECEIVE_POST,
        data: data
    }
}

export function requestAllPostType() {
    return {
        type: REQUEST_ALL_POST_TYPE
    }
}

export function receiveAllPostType(data) {
    return {
        type: RECEIVE_ALL_POST_TYPE,
        data: data
    }
}

export function fetchPostType(postType) {

    return function (dispatch) {
        dispatch(requestAllPostType());

        PostApi.getType(postType).then( data => {
            dispatch(receiveAllPostType(data));
        });
    }
}

export function fetchPost(postType, url) {

    return function (dispatch) {
        dispatch(requestPost());

        PostApi.get(postType, url).then( data => {
            dispatch(receivePost(data));
        });
    }
}
