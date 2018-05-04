import _ from 'lodash';
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../constants';
import { fetchGlobalTheme } from '../components/actions/theme-actions';

import MDCAutoInit from '../components/components/global/MDCAutoInit';
import Navbar from '../components/containers/candidate/common/Navbar';
import Footer from '../components/components/candidate/Footer';
import AdminOverlay from '../components/containers/common/AdminOverlay';

import StaffSignUp from '../components/containers/staff/StaffSignUp';

import SignInContainer from '../components/containers/users/SignInContainer';
import ForgotPasswordContainer from '../components/containers/users/ForgotPasswordContainer';
import ResetPasswordContainer from '../components/containers/users/ResetPasswordContainer';

import Unsubscribe from '../components/containers/contact/Unsubscribe';

import StaffRoutes from '../routes/StaffRoutes';
import RootRoutes from '../routes/RootRoutes';

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
                        <Route exact path='/sign-in' component={SignInContainer} />
                        <Route exact path='/forgot-password' component={ForgotPasswordContainer} />
                        <Route exact path='/reset_password' component={ResetPasswordContainer} />

                        <Route exact path='/unsubscribe/:token' component={Unsubscribe} />
                        <Route exact path='/staff/sign-up/:token' component={StaffSignUp} />

                        <Route path='/staff' component={StaffRoutes} />
                        <Route path='/' component={RootRoutes} />
                    </Switch>

                    <Footer />

                    <MDCAutoInit />
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
