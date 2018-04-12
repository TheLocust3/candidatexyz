import * as ThemeActions from '../actions/theme-actions';

const initialState = {
    isReady: false,
    theme: {},
    themes: [],
    globalTheme: {}
};

export function themeReducer(state = initialState, action) {
    switch (action.type) {
        case ThemeActions.REQUEST_ALL_THEMES:
        case ThemeActions.REQUEST_THEME:
            return Object.assign({}, state, {
                isReady: false
            });
        case ThemeActions.RECEIVE_THEME:
            return Object.assign({}, state, {
                isReady: true,
                theme: action.data
            });
        case ThemeActions.RECEIVE_ALL_THEMES:
            return Object.assign({}, state, {
                isReady: true,
                themes: action.data
            });
        case ThemeActions.RECEIVE_GLOBAL_THEME:
            return Object.assign({}, state, {
                isReady: true,
                globalTheme: action.data
            });
        default:
            return state;
    }
}
