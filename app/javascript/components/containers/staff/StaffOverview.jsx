import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

class StaffOverview extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Staff Overview'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        return (
            <div className='staff-overview'>
                <div className='mdc-typography--display3'>Staff Overview</div><br />

                <div style={{ marginLeft: '5%' }}>
                    <Link className='link' to='/staff-management'>Staff Management</Link><br />
                    <Link className='link' to='/staff/messages'>Messages</Link><br />
                    <Link className='link' to='/staff/volunteers'>Volunteers</Link><br />
                    <Link className='link' to='/edit-content'>Edit Miscellaneous Content</Link><br />
                    <Link className='link' to='/edit-user'>User Settings</Link><br />
                    <Link className='link' to='/staff/help'>Get Help</Link><br />
                </div>
            </div>
        );
    }
}

export default connect()(StaffOverview);
