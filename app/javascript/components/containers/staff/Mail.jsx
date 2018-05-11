import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import Header from '../../components/base/Header';

import MailForm from '../../components/staff/MailForm';

class Mail extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Mail'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        return (
            <div className='content-15 staff-form'>
                <Header type='display2'><b>Mail Everyone</b></Header><br />

                <MailForm />
                
                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Mail);
