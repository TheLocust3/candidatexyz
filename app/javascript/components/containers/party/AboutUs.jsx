import React from 'react';
import { connect } from 'react-redux';

import { setDocumentTitle, setBlankNavbar } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

import Header from '../../components/base/Header';
import TextContent from '../../containers/content/TextContent';

class AboutUs extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('About Us'));
        this.props.dispatch(setBlankNavbar(true));
    }
    
    render() {
        return (
            <div className='content'>
                <Header type='headline2'><TextContent identifier='partyAboutUsHeadline' /></Header>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(AboutUs);
