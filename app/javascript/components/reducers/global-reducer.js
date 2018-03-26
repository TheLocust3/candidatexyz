import * as GlobalActions from '../actions/global-actions';

const initialState = {
    blankNavbar: false,
    headerImage: '',
    fullscreen: false
};

export function globalReducer(state = initialState, action) {
    switch (action.type) {
        case GlobalActions.SET_BLANK_NAVBAR:
            return Object.assign({}, state, {
                blankNavbar: action.data
            });
        case GlobalActions.SET_HEADER_IMAGE:
            return Object.assign({}, state, {
                headerImage: action.data
            });
        case GlobalActions.SET_FULLSCREEN:
            return Object.assign({}, state, {
                fullscreen: action.data
            });
        default:
            return state;
    }
}
