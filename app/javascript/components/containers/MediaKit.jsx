import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../actions/global-actions';
import MDCAutoInit from '../components/global/MDCAutoInit';
import TextContent from '../containers/content/TextContent';
import ImageContent from '../containers/content/ImageContent';

class Meet extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Media Kit'));
        this.props.dispatch(setBlankNavbar(true));
    }
    
    render() {
        return (
            <div className='content content-15'>
                <div className='mdc-typography--display3'><b><TextContent identifier='mediaKitHeader' /></b></div><br />

                <div className='mdc-typography--headline'><b><TextContent identifier='mediaKitPressContactHeadline' /></b></div><br />
                <TextContent identifier='mediaKitPressSecretaryContact' /><br /><br />

                <div className='mdc-typography--headline'><b><TextContent identifier='mediaKitBiographyHeadline' /></b></div><br />
                Visit <Link to='/meet'><TextContent identifier='meetCandidate' /></Link> for information.<br /><br />
                Click <Link to='/short-bio'>here</Link> for an abbreviated biography.<br /><br />

                <div className='mdc-typography--headline'><b><TextContent identifier='mediaKitPhotosHeadline' /></b></div><br />
                <div className="mdc-layout-grid">
                    <div className="mdc-layout-grid__inner">
                        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6"><ImageContent identifier='mediaKitPhoto1' className='media-photo' /></div>
                        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6"><ImageContent identifier='mediaKitPhoto2' className='media-photo' /></div>
                    </div>

                    <div className="mdc-layout-grid__inner">
                        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6"><ImageContent identifier='mediaKitPhoto3' className='media-photo' /></div>
                        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6"><ImageContent identifier='mediaKitPhoto4' className='media-photo' /></div>
                    </div>
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Meet);
