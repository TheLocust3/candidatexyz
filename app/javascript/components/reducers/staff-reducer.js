import * as StaffActions from '../actions/staff-actions';

const initialState = {
    isReady: false,
    currentUser: {},
    user: {},
    users: { users: [] }
};

export function staffReducer(state = initialState, action) {
    switch (action.type) {
        case StaffActions.REQUEST_USER:
        case StaffActions.REQUEST_ALL_USERS:
        case StaffActions.REQUEST_CURRENT_USER:
            return Object.assign({}, state, {
                isReady: false
            });
        case StaffActions.RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {
                isReady: true,
                currentUser: action.data
            });
        case StaffActions.RECEIVE_USER:
            return Object.assign({}, state, {
                isReady: true,
                user: action.data
            });
        case StaffActions.RECEIVE_ALL_USERS:
            return Object.assign({}, state, {
                isReady: true,
                users: action.data
            });
        default:
            return state;
    }
}
