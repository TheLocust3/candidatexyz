import ThemeApi from '../../api/theme-api';

export const REQUEST_THEME = 'REQUEST_THEME';
export const RECEIVE_THEME = 'RECEIVE_THEME';
export const REQUEST_ALL_THEMES = 'REQUEST_ALL_THEMES';
export const RECEIVE_ALL_THEMES = 'RECEIVE_ALL_THEMES';
export const RECEIVE_GLOBAL_THEME = 'RECEIVE_GLOBAL_THEME';

export function requestTheme() {
    return {
        type: REQUEST_THEME
    }
}

export function receiveTheme(data) {
    return {
        type: RECEIVE_THEME,
        data: data
    }
}

export function receiveGlobalTheme(data) {
    return {
        type: RECEIVE_GLOBAL_THEME,
        data: data
    }
}

export function requestAllThemes() {
    return {
        type: REQUEST_ALL_THEMES
    }
}

export function receiveAllThemes(data) {
    return {
        type: RECEIVE_ALL_THEMES,
        data: data
    }
}

export function fetchAllThemes() {

    return function (dispatch) {
        dispatch(requestAllThemes());

        ThemeApi.getAll().then( data => {
            dispatch(receiveAllThemes(data));
        });
    }
}

export function fetchTheme(name) {

    return function (dispatch) {
        dispatch(requestTheme());

        ThemeApi.get(name).then( data => {
            dispatch(receiveTheme(data));
        });
    }
}

export function fetchGlobalTheme() {

    return function (dispatch) {
        dispatch(requestTheme());

        ThemeApi.get('Material').then( data => {
            dispatch(receiveGlobalTheme(data));
        });
    }
}
