import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TextContent from '../../../containers/content/TextContent';
import SlideshowContent from '../../../containers/content/SlideshowContent';
import Slideshow from '../../common/Slideshow';

class SlideshowPanel extends React.Component {

    render() {
        return (
            <SlideshowContent identifier='indexSlideshow'>
                <div className='mdc-typography--headline'>
                    <b><TextContent identifier='slideshowBlurb' /></b>
                </div><br />

                <Link to='/meet' className='link'><div className='mdc-typography--headline'><TextContent identifier='slideshowLink' /></div></Link>
            </SlideshowContent>
        );
    }
}

export default SlideshowPanel;
