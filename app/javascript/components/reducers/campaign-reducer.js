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
            return Object.assign({}, state, {
                isReady: true,
                campaign: action.data.campaigns[0]
            });
        default:
            return state;
    }
}
