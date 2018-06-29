import _ from 'lodash';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { StaffActions } from 'candidatexyz-common-js';

import { CANDIDATE_WEBSITE, PARTY_WEBSITE } from '../features';
import { candidateStaffRoutes } from './CandidateStaffRoutes';
import { partyStaffRoutes } from './PartyStaffRoutes';

import EditPost from '../components/containers/posts/EditPost';
import CreatePost from '../components/containers/posts/CreatePost';
import Themes from '../components/containers/staff/Themes';
import ThemeEditor from '../components/containers/staff/ThemeEditor';
import Help from '../components/containers/staff/Help';

import StaffDevelopmentRoutes from './StaffDevelopmentRoutes';

class StaffRoutes extends React.Component {

    componentWillMount() {
        this.props.dispatch(StaffActions.fetchCurrentUser());
    }

    renderCandidateRoutes() {
        if (!CANDIDATE_WEBSITE) return;

        return candidateStaffRoutes();
    }

    renderPartyRoutes() {
        if (!PARTY_WEBSITE) return;

        return partyStaffRoutes();
    }

    render() {
        if (_.isEmpty(this.props.user)) return null;

        return (
            <Route path='/staff'>
                <Switch>
                    {this.renderCandidateRoutes()}
                    {this.renderPartyRoutes()}

                    <Route exact path='/staff/posts/:postType/:url/edit' component={EditPost} />
                    <Route exact path='/staff/posts/:postType/new' component={CreatePost} />

                    <Route exact path='/staff/themes' component={Themes} />
                    <Route exact path='/staff/themes/new' component={ThemeEditor} />
                    <Route exact path='/staff/themes/:name' component={ThemeEditor} />

                    <Route exact path='/staff/help' component={Help} />

                    <StaffDevelopmentRoutes />
                </Switch>
            </Route>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.staff.currentUser
    };
}

export default connect(mapStateToProps)(StaffRoutes);
