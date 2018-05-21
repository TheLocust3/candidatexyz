import React from 'react';

import Header from '../../base/Header';
import Link from '../../base/Link';
import TextContent from '../../../containers/content/TextContent';

import PanelWrapper from '../../panels/PanelWrapper';
import ShowPost from '../../../containers/posts/ShowPost';
import JoinUsForm from '../forms/JoinUsForm';

export default class JoinPanel extends React.Component {

    render() {
        return (
            <PanelWrapper className='join-panel'>
                <center><Header type='headline2' className='panel-headline'><TextContent identifier='partyJoinPanelHeadline' /></Header></center>
                <center><Header type='headline6' className='panel-headline'><TextContent identifier='partyJoinPanelSubtitle' /></Header></center>
                <br />

                <div className='content-20 content-bottom'>
                    <JoinUsForm />
                </div>
            </PanelWrapper>
        );
    }
}
