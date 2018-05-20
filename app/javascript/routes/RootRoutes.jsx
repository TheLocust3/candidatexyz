import _ from 'lodash';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { CANDIDATE_WEBSITE, PARTY_WEBSITE } from '../features';
import { candidateRoutes } from './CandidateRoutes';
import { partyRoutes } from './PartyRoutes';

import News from '../components/containers/news/News';
import ShowNews from '../components/containers/news/ShowNews';
import NotFound from '../components/components/NotFound';

class RootRoutes extends React.Component {

    renderCandidateRoutes() {
        if (!CANDIDATE_WEBSITE) return;

        return candidateRoutes();
    }

    renderPartyRoutes() {
        if (!PARTY_WEBSITE) return;

        return partyRoutes();
    }

    render() {
        return (
            <Switch>
                <Route exact path='/news' component={News} />,
                <Route exact path='/news/:url' component={ShowNews} />,

                {this.renderCandidateRoutes()}
                {this.renderPartyRoutes()}

                <Route path='/404' component={NotFound} />
                <Redirect from='*' to='/404' />
            </Switch>
        );
    }
}

export default connect()(RootRoutes);
