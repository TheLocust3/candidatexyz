import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import Header from '../../components/base/Header';
import Link from '../../components/base/Link'

import MailForm from '../../components/staff/MailForm';

class Mail extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Mail'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        return (
            <div className='content content-15 staff-form'>
                <Header type='headline2'>Mail Everyone</Header><br />

                <Link to='/staff/mail/edit'>Edit Image Template</Link>

                <MailForm />
                
                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Mail);
