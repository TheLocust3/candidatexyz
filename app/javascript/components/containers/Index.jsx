import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';

import TextContent from './content/TextContent';
import SlideshowContent from './content/SlideshowContent';
import JoinCard from '../components/common/JoinCard';
import JoinTeamPanel from '../components/common/JoinTeamPanel'
import Slideshow from '../components/common/Slideshow';

export default class Index extends React.Component {

    componentDidMount() {
        $('.header-image').css('background-image', 'url(https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59cd9e5032601e2e1011ec17/1506647684440/Seth-headshot-smile.jpg?format=2500w)');
    }

    render() {
        return (
            <div>
                <JoinCard />

                <div className='content'>
                    <SlideshowContent identifier='homePageSlideshow'>
                        <div className='mdc-typography--headline'>
                            <b><TextContent identifier='slideshowBlurb' /></b>
                        </div><br />

                        <Link to='/meet' className='link'><div className='mdc-typography--headline'><TextContent identifier='slideshowLink' /></div></Link>
                    </SlideshowContent>

                    <JoinTeamPanel />
                </div>
            </div>
        );
    }
}
