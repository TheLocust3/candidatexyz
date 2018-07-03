import $ from 'jquery';

let ContentApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            $.ajax('/api/content', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(identifier) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/content/${identifier}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(type, identifier, content) {
        return new Promise((resolve, reject) => {
            $.ajax('/api/content', {
                type: 'post',
                data: { content_type: type, identifier: identifier, content: content },
                success: resolve,
                error: reject
            });
        });
    },

    refreshCampaignId() {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/refresh_campaign_id`, {
                type: 'patch',
                success: resolve,
                error: reject
            });
        });
    },

    update(identifier, content) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/content/${identifier}`, {
                type: 'patch',
                data: { content: content },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(identifier) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/content/${identifier}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default ContentApi;
