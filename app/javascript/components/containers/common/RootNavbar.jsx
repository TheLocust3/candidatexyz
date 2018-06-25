import React from 'react';

import { CANDIDATE_WEBSITE, PARTY_WEBSITE } from '../../../features';
import CandidateNavbar from '../candidate/common/Navbar';
import PartyNavbar from '../party/common/Navbar';
import AlertContent from '../content/AlertContent';

class RootNavbar extends React.Component {

    render() {
        if (CANDIDATE_WEBSITE) {
            return <CandidateNavbar />;
        } else if (PARTY_WEBSITE) {
            return (
                <div>
                    <PartyNavbar />
                    <AlertContent identifier='alert' />
                </div>
            );
        }
    }
}

export default RootNavbar;
