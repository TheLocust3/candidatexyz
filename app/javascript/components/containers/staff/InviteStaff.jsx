import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import Header from '../../components/base/Header';

import InviteForm from '../../components/staff/InviteForm';

class InviteStaff extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Invite Staff'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        return (
            <div className='content-15 staff-form'>
                <Header type='display2'><b>Invite Staffer</b></Header><br />

                <InviteForm />
                
                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(InviteStaff);
