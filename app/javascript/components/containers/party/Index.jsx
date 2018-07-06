import React from 'react';
import { connect } from 'react-redux';

import { setDocumentTitle, setBlankNavbar, setFullscreen } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import SlideshowContent from '../content/SlideshowContent';

import AboutPanel from '../../components/party/panels/AboutPanel';
import NewsPanel from '../../components/candidate/panels/NewsPanel';
import NavigationPanel from '../../components/party/panels/NavigationPanel';
import JoinPanel from '../../components/party/panels/JoinPanel';

class Index extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Home'));
        this.props.dispatch(setBlankNavbar(true));
        this.props.dispatch(setFullscreen(true));
    }
    
    render() {
        return (
            <div className='root-content'>
                <div className='slideshow-panel'>
                    <SlideshowContent identifier='indexSlideshow' time={1000} />
                </div>

                <AboutPanel />

                <NewsPanel />

                <NavigationPanel />

                <JoinPanel />

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Index);
