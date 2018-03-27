import * as PostActions from '../actions/post-actions';

const initialState = {
    isReady: false,
    posts: []
};

export function postReducer(state = initialState, action) {
    switch (action.type) {
        case PostActions.REQUEST_ALL_POST_TYPE:
        case PostActions.REQUEST_POST:
            return Object.assign({}, state, {
                isReady: false
            });
        case PostActions.RECEIVE_POST:
            return Object.assign({}, state, {
                isReady: true,
                posts: [...state.posts, action.data]
            });
        case PostActions.RECEIVE_ALL_POST_TYPE:
            return Object.assign({}, state, {
                isReady: true,
                posts: action.data
            });
        default:
            return state;
    }
}
