import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/base/Header';
import Link from '../../components/base/Link';
import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

class StaffOverview extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Staff Overview'));
        this.props.dispatch(setBlankNavbar(true));
    }

    renderSuperuser() {
        if (!this.props.user.superuser) return;

        return (
            <div>
                You are a superuser
            </div>
        );
    }

    render() {
        return (
            <div className='content-15'>
                <Header type='display3'>Staff Overview</Header><br />
                {this.renderSuperuser()}<br />

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

function mapStateToProps(state) {
    return {
        user: state.staff.currentUser
    };
}

export default connect(mapStateToProps)(StaffOverview);
