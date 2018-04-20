import PageApi from '../../api/page-api';

export const REQUEST_PAGE = 'REQUEST_PAGE';
export const RECEIVE_PAGE = 'RECEIVE_PAGE';
export const REQUEST_ALL_PAGES = 'REQUEST_ALL_PAGES';
export const RECEIVE_ALL_PAGES = 'RECEIVE_ALL_PAGES';

export function requestPage() {
    return {
        type: REQUEST_PAGE
    }
}

export function receivePage(data) {
    return {
        type: RECEIVE_PAGE,
        data: data
    }
}

export function requestAllPages() {
    return {
        type: REQUEST_ALL_PAGES
    }
}

export function receiveAllPages(data) {
    return {
        type: RECEIVE_ALL_PAGES,
        data: data
    }
}

export function fetchAllPages() {

    return function (dispatch) {
        dispatch(requestAllPages());

        PageApi.getAll().then( data => {
            dispatch(receiveAllPages(data));
        });
    }
}

export function fetchPage(name) {

    return function (dispatch) {
        dispatch(requestPage());

        PageApi.get(name).then( data => {
            dispatch(receivePage(data));
        });
    }
}
