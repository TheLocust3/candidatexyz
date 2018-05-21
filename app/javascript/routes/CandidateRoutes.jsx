import React from 'react';
import { Route } from 'react-router-dom';

import SplashPage from '../components/containers/candidate/SplashPage';
import Index from '../components/containers/candidate/Index';
import Meet from '../components/containers/candidate/Meet';
import Action from '../components/containers/candidate/Action';
import SignUp from '../components/containers/candidate/SignUp';
import Contact from '../components/containers/candidate/Contact';
import MediaKit from '../components/containers/candidate/MediaKit';
import ShortBio from '../components/containers/candidate/ShortBio';
import Issues from '../components/containers/candidate/issues/Issues';
import ShowIssue from '../components/containers/candidate/issues/ShowIssue';

// TODO: Find way to get rid of keys
export function candidateRoutes() {
    return [
        <Route exact path='/' component={SplashPage} key='1' />,
        <Route exact path='/home' component={Index} key='2' />,
        <Route exact path='/meet' component={Meet} key='3' />,
        <Route exact path='/action' component={Action} key='4' />,
        <Route exact path='/sign_up' component={SignUp} key='5' />,
        <Route exact path='/contact' component={Contact} key='6' />,
        <Route exact path='/media-kit' component={MediaKit} key='7' />,
        <Route exact path='/short-bio' component={ShortBio} key='8' />,
        <Route exact path='/issues' component={Issues} key='9' />,
        <Route exact path='/issues/:url' component={ShowIssue} key='10' />,
    ];
}
