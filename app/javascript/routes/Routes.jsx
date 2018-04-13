import _ from 'lodash';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../constants';
import { fetchGlobalTheme } from '../components/actions/theme-actions';

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

import News from '../components/containers/news/News';
import ShowNews from '../components/containers/news/ShowNews';
import Issues from '../components/containers/issues/Issues';
import ShowIssue from '../components/containers/issues/ShowIssue';
import StaffSignUp from '../components/containers/staff/StaffSignUp';

import SignInContainer from '../components/containers/users/SignInContainer';
import ForgotPasswordContainer from '../components/containers/users/ForgotPasswordContainer';
import ResetPasswordContainer from '../components/containers/users/ResetPasswordContainer';

import Unsubscribe from '../components/containers/contact/Unsubscribe';

import StaffRoutes from '../routes/StaffRoutes';

// Always start navigation at the top of the page
const ScrollToTop = () => {
    window.scrollTo(0, 0);

    return null;
};

class Routes extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchGlobalTheme());
    }

    render() {
        if (_.isEmpty(this.props.globalTheme)) return null;

        return (
            <Router history={history}>
                <div>
                    <Route component={ScrollToTop} />

                    <Navbar />
                    <AdminOverlay />

                    <Switch>
                        <Route exact path='/' component={SplashPage} />
                        <Route exact path='/home' component={Index} />
                        <Route exact path='/meet' component={Meet} />
                        <Route exact path='/action' component={Action} />
                        <Route exact path='/issues' component={Issues} />
                        <Route exact path='/news' component={News} />
                        <Route exact path='/sign_up' component={SignUp} />
                        <Route exact path='/privacy' component={Privacy} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/media-kit' component={MediaKit} />
                        <Route exact path='/short-bio' component={ShortBio} />

                        <Route exact path='/sign-in' component={SignInContainer} />
                        <Route exact path='/forgot-password' component={ForgotPasswordContainer} />
                        <Route exact path='/reset_password' component={ResetPasswordContainer} />

                        <Route exact path='/news/:url' component={ShowNews} />
                        <Route exact path='/issues/:url' component={ShowIssue} />
                        
                        <Route exact path='/unsubscribe/:token' component={Unsubscribe} />
                        <Route exact path='/staff/sign-up/:token' component={StaffSignUp} />
                        
                        <StaffRoutes />
                    </Switch>

                    <Footer />
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        globalTheme: state.themes.globalTheme
    };
}

export default connect(mapStateToProps)(Routes);
