import * as PageActions from '../actions/page-actions';

const initialState = {
    isReady: false,
    page: {},
    pages: []
};

export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case PageActions.REQUEST_ALL_PAGES:
        case PageActions.REQUEST_PAGE:
            return Object.assign({}, state, {
                isReady: false
            });
        case PageActions.RECEIVE_PAGE:
            return Object.assign({}, state, {
                isReady: true,
                page: action.data
            });
        case PageActions.RECEIVE_ALL_PAGES:
            return Object.assign({}, state, {
                isReady: true,
                pages: action.data
            });
        default:
            return state;
    }
}
