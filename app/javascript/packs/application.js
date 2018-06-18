import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Auth from 'j-toker';

import { store, USER_API_DOMAIN, DOMAIN } from '../constants';

import Routes from '../routes/Routes';

$.ajaxSetup({
    headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
});

$.auth.configure({
    apiUrl: USER_API_DOMAIN,
    passwordResetSuccessUrl: () => { return `${DOMAIN}/reset_password` }
});

class Base extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}

ReactDOM.render(
    <Base />,
    document.getElementById('root')
);
