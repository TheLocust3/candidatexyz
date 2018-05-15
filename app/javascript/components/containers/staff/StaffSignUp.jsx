import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import Header from '../../components/base/Header';

import StaffSignUpForm from '../../components/staff/StaffSignUpForm';

class StaffSignUp extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Invite Staff'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        return (
            <div className='content-15 staff-form'>
                <Header type='headline2'><b>Staff Sign Up</b></Header><br />

                <StaffSignUpForm token={this.props.match.params.token} />
                
                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(StaffSignUp);
