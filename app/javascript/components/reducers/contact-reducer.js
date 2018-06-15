import * as ContactActions from '../actions/contact-actions';

const initialState = {
    isReady: false,
    contact: {},
    contacts: { contacts: [] }
};

export function contactReducer(state = initialState, action) {
    switch (action.type) {
        case ContactActions.REQUEST_ALL_CONTACTS:
        case ContactActions.REQUEST_CONTACT:
            return Object.assign({}, state, {
                isReady: false
            });
        case ContactActions.RECEIVE_CONTACT:
            return Object.assign({}, state, {
                isReady: true,
                contact: action.data
            });
        case ContactActions.RECEIVE_ALL_CONTACTS:
            return Object.assign({}, state, {
                isReady: true,
                contacts: action.data
            });
        default:
            return state;
    }
}
