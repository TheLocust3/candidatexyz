import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import Header from '../../components/base/Header';

import UploadImageForm from '../../components/staff/UploadImageForm';

class UploadImage extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Upload Image'));
        this.props.dispatch(setBlankNavbar(true));
    }
    
    render() {
        return (
            <div className='content content-bottom content-10'>
                <Header type='headline2'>Upload Image</Header><br />
                
                <UploadImageForm />

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(UploadImage);
