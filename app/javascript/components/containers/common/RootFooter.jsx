import React from 'react';

import { CANDIDATE_WEBSITE, PARTY_WEBSITE } from '../../../features';
import CandidateFooter from '../../components/candidate/Footer';
import PartyFooter from '../../components/party/Footer';

class RootFooter extends React.Component {

    render() {
        if (CANDIDATE_WEBSITE) {
            return <CandidateFooter />;
        } else if (PARTY_WEBSITE) {
            return <PartyFooter />;
        }
    }
}

export default RootFooter;
