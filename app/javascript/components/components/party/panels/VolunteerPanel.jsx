import React from 'react';

import Header from '../../base/Header';
import Link from '../../base/Link';
import TextContent from '../../../containers/content/TextContent';

import PanelWrapper from '../../panels/PanelWrapper';
import ShowPost from '../../../containers/posts/ShowPost';

import VolunteerForm from '../forms/VolunteerForm';

export default class VolunteerPanel extends React.Component {

    render() {
        return (
            <PanelWrapper className='join-panel'>
                <center><Header type='headline2' className='panel-headline'><TextContent identifier='partyVolunteerPanelHeadline' /></Header></center>
                <center><Header type='headline6' className='panel-headline'><TextContent identifier='partyVolunteerPanelSubtitle' /></Header></center>
                <br />

                <div className='content-20 content-bottom'>
                    <VolunteerForm />
                </div>
            </PanelWrapper>
        );
    }
}
