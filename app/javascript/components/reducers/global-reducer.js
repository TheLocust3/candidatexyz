import * as GlobalActions from '../actions/global-actions';
import { TITLE } from '../../constants';

const initialState = {
    blankNavbar: false,
    headerImage: '',
    fullscreen: false,
    documentTitle: ''
};

export function globalReducer(state = initialState, action) {
    switch (action.type) {
        case GlobalActions.SET_BLANK_NAVBAR:
            return Object.assign({}, state, {
                blankNavbar: action.data,
                headerImage: '',
                fullscreen: false
            });
        case GlobalActions.SET_FULLSCREEN:
            return Object.assign({}, state, {
                fullscreen: action.data
            });
        case GlobalActions.SET_DOCUMENT_TITLE:
            document.title = `${TITLE} - ${action.data}`

            return Object.assign({}, state, {
                documentTitle: action.data
            });
        case GlobalActions.SET_HEADER_IMAGE:
            return Object.assign({}, state, {
                blankNavbar: false,
                fullscreen: false,
                headerImage: action.data
            });
        default:
            return state;
    }
}
