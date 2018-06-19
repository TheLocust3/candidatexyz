import $ from 'jquery';
import { VOLUNTEER_API_DOMAIN, USER_API_DOMAIN } from './constants';

// Stolen from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
export function uuid() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}

export function dashesToCamel(str) {
    return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

export function camelToDashes(str) {
    return str.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
}

export function volunteerApi(url, hash) {
    return $.ajax(`${VOLUNTEER_API_DOMAIN}${url}`, {
        beforeSend: function(xhr, settings) { // attach authentication headers to request, modified from https://github.com/lynndylanhurley/j-toker/blob/0f76481813c6a20642de0756c5077da338ac4a0b/src/j-toker.js#L1172
            let currentHeaders = $.auth.retrieveData('authHeaders');
            for (var key in $.auth.getConfig().tokenFormat) {
                xhr.setRequestHeader(key, currentHeaders[key]);
            }
        },
        ...hash
    });
}
