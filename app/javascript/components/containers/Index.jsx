import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';

import ContentApi from '../../api/content-api';
import TextContent from './content/TextContent';
import SlideshowContent from './content/SlideshowContent';
import JoinCard from '../components/common/JoinCard';
import JoinTeamPanel from '../components/common/JoinTeamPanel'
import Slideshow from '../components/common/Slideshow';

export default class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isReady: false, imageUrl: '' };
    }

    componentWillMount() {
        ContentApi.get('homeBackground').then((response) => {
            this.setState({
                isReady: true,
                imageUrl: response.content
            });
        });
    }

    render() {
        $('.header-image').css('background-image', `url(${this.state.imageUrl})`);

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
