import React from 'react';
import { connect } from 'react-redux';

import { setDocumentTitle, setBlankNavbar } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

import Header from '../../components/base/Header';
import TextContent from '../../containers/content/TextContent';
import ShowPost from '../../containers/posts/ShowPost';

import JoinPanel from '../../components/party/panels/JoinPanel';
import VolunteerPanel from '../../components/party/panels/VolunteerPanel';

class GetInvolved extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('About Us'));
        this.props.dispatch(setBlankNavbar(true));
    }
    
    render() {
        return (
            <div className='content'>
                <div className='content-15'>
                    <Header type='headline2'><TextContent identifier='partyGetInvolvedHeadline' /></Header>
                    <ShowPost postType='party-involved' url='party-involved-blurb' />
                </div>

                <JoinPanel />

                <VolunteerPanel />

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(GetInvolved);
