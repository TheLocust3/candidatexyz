import React from 'react';

import Header from '../../base/Header';
import Link from '../../base/Link';
import TextContent from '../../../containers/content/TextContent';

import PanelWrapper from '../../panels/PanelWrapper';
import ShowPost from '../../../containers/posts/ShowPost';

export default class AboutPanel extends React.Component {

    render() {
        return (
            <PanelWrapper className='about-panel'>
                <center><Header type='headline2' className='panel-headline'><TextContent identifier='partyAboutPanelHeadline' /></Header></center>

                <div className='content-20'>
                    <ShowPost postType='party-about-panel' url='party-about' />
                </div>

                
            </PanelWrapper>
        );
    }
}
