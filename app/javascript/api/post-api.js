import $ from 'jquery';

let PostApi = {

    getType(postType) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/posts/${postType}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(postType, url) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/posts/${postType}/${url}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(postType, url, title, body) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/posts`, {
                type: 'post',
                data: { post_type: postType, url: url, title: title, body: body },
                success: resolve,
                error: reject
            });
        });
    },

    update(postType, url, title, body) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/posts/${postType}/${url}`, {
                type: 'patch',
                data: { url: url, title: title, body: body },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(postType, url) {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/posts/${postType}/${url}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default PostApi;
