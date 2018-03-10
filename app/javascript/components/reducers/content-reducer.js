import * as ContentActions from '../actions/content-actions';

const initialState = {
    isReady: false,
    contents: []
};

export function contentReducer(state = initialState, action) {
    switch (action.type) {
        case ContentActions.REQUEST_ALL_CONTENT:
        case ContentActions.REQUEST_CONTENT:
            return Object.assign({}, state, {
                isReady: false
            });
        case ContentActions.RECEIVE_CONTENT:
            let contents = state.contents;
            contents.push(action.data);

            return Object.assign({}, state, {
                isReady: true,
                contents: contents
            });
        case ContentActions.RECEIVE_ALL_CONTENT:
            return Object.assign({}, state, {
                isReady: true,
                contents: action.data
            });
        default:
            return state;
    }
}
