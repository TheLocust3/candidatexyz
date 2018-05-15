import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/base/Header';
import Link from '../../components/base/Link';
import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import TextContent from '../../containers/content/TextContent';
import ImageContent from '../../containers/content/ImageContent';

class Meet extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Media Kit'));
        this.props.dispatch(setBlankNavbar(true));
    }
    
    render() {
        return (
            <div className='content content-15'>
                <Header type='headline3'><b><TextContent identifier='mediaKitHeader' /></b></Header><br />

                <Header type='headline5'><b><TextContent identifier='mediaKitPressContactHeadline' /></b></Header><br />
                <TextContent identifier='mediaKitPressSecretaryContact' /><br /><br />

                <Header type='headline5'><b><TextContent identifier='mediaKitBiographyHeadline' /></b></Header><br />
                Visit <Link to='/meet' unstyled><TextContent identifier='meetCandidate' /></Link> for information.<br /><br />
                Click <Link to='/short-bio' unstyled>here</Link> for an abbreviated biography.<br /><br />

                <Header type='headline5'><b><TextContent identifier='mediaKitPhotosHeadline' /></b></Header><br />
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
