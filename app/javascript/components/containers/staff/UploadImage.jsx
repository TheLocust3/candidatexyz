import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

import UploadImageForm from '../../components/staff/UploadImageForm';

class UploadImage extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Upload Image'));
        this.props.dispatch(setBlankNavbar(true));
    }
    render() {
        return (
            <div className='content-bottom content-10'>
                <div className='mdc-typography--display2'>Upload Image</div><br />
                
                <UploadImageForm />

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(UploadImage);
