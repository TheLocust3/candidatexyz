import { setCampaignId } from 'candidatexyz-common-js';

import * as CampaignActions from '../actions/campaign-actions';

const initialState = {
    isReady: false,
    campaign: {}
};

export function campaignReducer(state = initialState, action) {
    switch (action.type) {
        case CampaignActions.REQUEST_CAMPAIGN:
            return Object.assign({}, state, {
                isReady: false
            });
        case CampaignActions.RECEIVE_CAMPAIGN:
            setCampaignId(action.data.id);

            return Object.assign({}, state, {
                isReady: true,
                campaign: action.data
            });
        default:
            return state;
    }
}
