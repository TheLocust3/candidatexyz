import * as PanelActions from '../actions/panel-actions';

const initialState = {
    isReady: false,
    panel: {},
    panels: []
};

export function panelReducer(state = initialState, action) {
    switch (action.type) {
        case PanelActions.REQUEST_ALL_PANELS:
        case PanelActions.REQUEST_PANEL:
            return Object.assign({}, state, {
                isReady: false
            });
        case PanelActions.RECEIVE_PANEL:
            return Object.assign({}, state, {
                isReady: true,
                panel: action.data
            });
        case PanelActions.RECEIVE_ALL_PANELS:
            return Object.assign({}, state, {
                isReady: true,
                panels: action.data
            });
        default:
            return state;
    }
}
