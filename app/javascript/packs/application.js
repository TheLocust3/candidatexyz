import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addJTokerHeaders } from 'candidatexyz-common-js';

import { store } from '../constants';

import Routes from '../routes/Routes';

$.ajaxSetup({
    headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    },
    beforeSend: function(xhr, settings) {
        addJTokerHeaders(xhr)
    }
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
