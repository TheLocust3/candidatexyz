import ImageApi from '../../api/image-api';

export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const REQUEST_ALL_IMAGES = 'REQUEST_ALL_IMAGES';
export const RECEIVE_ALL_IMAGES = 'RECEIVE_ALL_IMAGES';

export function requestImage() {
    return {
        type: REQUEST_IMAGE
    }
}

export function receiveImage(data) {
    return {
        type: RECEIVE_IMAGE,
        data: data
    }
}

export function requestAllImages() {
    return {
        type: REQUEST_ALL_IMAGES
    }
}

export function receiveAllImages(data) {
    return {
        type: RECEIVE_ALL_IMAGES,
        data: data
    }
}

export function fetchAllImages() {

    return function (dispatch) {
        dispatch(requestAllImages());

        ImageApi.getAll().then( data => {
            dispatch(receiveAllImages(data));
        });
    }
}

export function fetchImage(identifier) {

    return function (dispatch) {
        dispatch(requestImage());

        ImageApi.get(identifier).then( data => {
            dispatch(receiveImage(data));
        });
    }
}
