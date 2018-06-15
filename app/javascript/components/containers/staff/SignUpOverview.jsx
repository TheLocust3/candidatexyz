import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import { fetchAllContacts } from '../../actions/contact-actions';
import Header from '../../components/base/Header';

import SignUpList from '../../components/staff/SignUpList';

class SignUpOverview extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Sign Ups Overview'));
        this.props.dispatch(setBlankNavbar(true));
        this.props.dispatch(fetchAllContacts());
    }

    render() {
        return (
            <div className='content content-15'>
                <Header type='headline3'>Sign Ups Overview</Header><br />

                <SignUpList contacts={this.props.contacts.contacts} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts.contacts
    };
}

export default connect(mapStateToProps)(SignUpOverview);
