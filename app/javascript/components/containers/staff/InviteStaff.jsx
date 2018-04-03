import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

import InviteForm from '../../components/staff/InviteForm';

class InviteStaff extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Invite Staff'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        return (
            <div className='staff-form'>
                <div className='mdc-typography--display2'><b>Invite Staffer</b></div><br />

                <InviteForm />
                
                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(InviteStaff);
