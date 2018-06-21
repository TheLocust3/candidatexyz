import { userApi } from '../helpers';

let CampaignApi = {
    
    getByName(name) {
        return new Promise((resolve, reject) => {
            userApi(`/campaigns?name=${name}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    }
};

export default CampaignApi
