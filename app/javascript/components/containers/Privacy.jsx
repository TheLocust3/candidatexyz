import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../actions/global-actions';
import MDCAutoInit from '../components/global/MDCAutoInit';
import Header from '../components/base/Header';

import TextContent from '../containers/content/TextContent';
import ShowPost from './posts/ShowPost';

class Privacy extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Privacy Policy'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        return (
            <div className='content content-15'>
                <Header type='headline3'><TextContent identifier='privacyHeader' /></Header><br />

                <ShowPost postType='privacy' url='privacy' />
                
                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Privacy);
