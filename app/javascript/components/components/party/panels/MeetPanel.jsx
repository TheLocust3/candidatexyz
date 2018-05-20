import React from 'react';

import Header from '../../base/Header';
import Link from '../../base/Link';
import TextContent from '../../../containers/content/TextContent';

import PanelWrapper from '../../panels/PanelWrapper';
import ShowPost from '../../../containers/posts/ShowPost';

export default class MeetPanel extends React.Component {

    render() {
        return (
            <PanelWrapper className='meet-panel'>
                <center><Header type='headline2' className='panel-headline'><TextContent identifier='partyMeetPanelHeadline' /></Header></center>
                <br />

                <div className='content-20'>
                    test
                </div>
            </PanelWrapper>
        );
    }
}
