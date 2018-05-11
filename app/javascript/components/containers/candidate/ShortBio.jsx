import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/base/Header';
import Link from '../../components/base/Link';
import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import TextContent from '../../containers/content/TextContent';

class Meet extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Short Bio'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        return (
            <div className='content content-15'>
                <Header type='display3'><b><TextContent identifier='shortBioHeader' /></b></Header><br />
                <TextContent identifier='shortBioBlurb' /><br /><br />

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Meet);
