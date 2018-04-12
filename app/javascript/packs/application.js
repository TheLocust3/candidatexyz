import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { history, store } from '../constants';

import Routes from '../routes/Routes';

$.ajaxSetup({
    headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    },
    dataType: 'json'
});

// Always start navigation at the top of the page
const ScrollToTop = () => {
    window.scrollTo(0, 0);

    return null;
};

class Base extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router history={history}>
                        <div>
                            <Route component={ScrollToTop} />

                            <Routes />
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <Base />,
    document.getElementById('root')
);
