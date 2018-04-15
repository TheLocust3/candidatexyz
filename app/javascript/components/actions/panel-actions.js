import PanelApi from '../../api/panel-api';

export const REQUEST_PANEL = 'REQUEST_PANEL';
export const RECEIVE_PANEL = 'RECEIVE_PANEL';
export const REQUEST_ALL_PANELS = 'REQUEST_ALL_PANELS';
export const RECEIVE_ALL_PANELS = 'RECEIVE_ALL_PANELS';

export function requestPanel() {
    return {
        type: REQUEST_PANEL
    }
}

export function receivePanel(data) {
    return {
        type: RECEIVE_PANEL,
        data: data
    }
}

export function requestAllPanels() {
    return {
        type: REQUEST_ALL_PANELS
    }
}

export function receiveAllPanels(data) {
    return {
        type: RECEIVE_ALL_PANELS,
        data: data
    }
}

export function fetchAllPanels() {

    return function (dispatch) {
        dispatch(requestAllPanels());

        PanelApi.getAll().then( data => {
            dispatch(receiveAllPanels(data));
        });
    }
}

export function fetchPanel(name) {

    return function (dispatch) {
        dispatch(requestPanel());

        PanelApi.get(name).then( data => {
            dispatch(receivePanel(data));
        });
    }
}
