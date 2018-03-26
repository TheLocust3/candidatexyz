import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ParallaxProvider } from 'react-scroll-parallax';
import thunkMiddleware from 'redux-thunk';

import reducer from '../components/reducers/root-reducer';

import Navbar from '../components/containers/common/Navbar';
import Footer from '../components/components/Footer';
import AdminOverlay from '../components/containers/common/AdminOverlay';

import SplashPage from '../components/containers/SplashPage';
import Index from '../components/containers/Index';
import Meet from '../components/containers/Meet';
import Action from '../components/containers/Action';
import SignUp from '../components/containers/SignUp';
import Privacy from '../components/containers/Privacy';
import Contact from '../components/containers/Contact';
import MediaKit from '../components/containers/MediaKit';
import ShortBio from '../components/containers/ShortBio';
import EditRawContent from '../components/containers/EditRawContent';

import SignInContainer from '../components/containers/users/SignInContainer';
import ForgotPasswordContainer from '../components/containers/users/ForgotPasswordContainer';
import ResetPasswordContainer from '../components/containers/users/ResetPasswordContainer';
import EditUserContainer from '../components/containers/users/EditUserContainer';

$.ajaxSetup({
    headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    },
    dataType: 'json'
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Always start navigation at the top of the page
const ScrollToTop = () => {
    window.scrollTo(0, 0);

    return null;
};

class Base extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <ParallaxProvider>
                    <div>
                        <Router>
                            <div>
                                <Navbar />
                                <AdminOverlay />

                                <Route component={ScrollToTop} />

                                <Switch>
                                    <Route exact path='/' component={SplashPage} />
                                    <Route exact path='/home' component={Index} />
                                    <Route exact path='/meet' component={Meet} />
                                    <Route exact path='/action' component={Action} />
                                    <Route exact path='/sign_up' component={SignUp} />
                                    <Route exact path='/privacy' component={Privacy} />
                                    <Route exact path='/contact' component={Contact} />
                                    <Route exact path='/media-kit' component={MediaKit} />
                                    <Route exact path='/short-bio' component={ShortBio} />
                                    <Route exact path='/edit-content' component={EditRawContent} />

                                    <Route exact path='/sign-in' component={SignInContainer} />
                                    <Route exact path='/forgot-password' component={ForgotPasswordContainer} />
                                    <Route exact path='/reset-password' component={ResetPasswordContainer} />
                                    <Route exact path='/users/edit' component={EditUserContainer} />
                                </Switch>

                                <Footer />
                            </div>
                        </Router>
                    </div>
                </ParallaxProvider>
            </Provider>
        );
    }
}

ReactDOM.render(
    <Base />,
    document.getElementById('root')
);
