import _ from 'lodash';

import * as ThemeActions from '../actions/theme-actions';

const initialState = {
    isReady: false,
    theme: {},
    themes: []
};

export function themeReducer(state = initialState, action) {
    switch (action.type) {
        case ThemeActions.RECEIVE_ALL_THEMES:
        case ThemeActions.RECEIVE_THEME:
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
        default:
            return state;
    }
}
