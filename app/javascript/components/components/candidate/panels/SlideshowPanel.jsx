import React from 'react';
import { connect } from 'react-redux';

import Header from '../../base/Header';
import Link from '../../base/Link';
import TextContent from '../../../containers/content/TextContent';
import SlideshowContent from '../../../containers/content/SlideshowContent';
import Slideshow from '../../common/Slideshow';

class SlideshowPanel extends React.Component {

    render() {
        return (
            <SlideshowContent identifier='indexSlideshow'>
                <Header type='headline5'><b><TextContent identifier='slideshowBlurb' /></b></Header><br />

                <Link to='/meet' className='link'>
                    <Header type='headline5'><TextContent identifier='slideshowLink' /></Header>
                </Link>
            </SlideshowContent>
        );
    }
}

export default SlideshowPanel;
