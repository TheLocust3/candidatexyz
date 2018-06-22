import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/base/Header';
import Link from '../../components/base/Link';
import { StaffActions } from 'candidatexyz-common-js';
import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

class StaffManagement extends React.Component {

    componentWillMount() {
        this.props.dispatch(StaffActions.fetchCurrentUser());
        this.props.dispatch(StaffActions.fetchAllUsers());
        this.props.dispatch(setDocumentTitle('Staff Management'));
        this.props.dispatch(setBlankNavbar(true));
    }

    renderUserList() {
        return (
            <ul className='mdc-list mdc-list--two-line'>
                {this.props.users.users.map((user) => {
                    if (user.superuser) return;

                    let link = this.props.currentUser.admin ? `/staff/staff-management/${user.id}/edit` : '#';

                    return (
                        <Link className='unstyled-link' key={user.id} to={link}>
                            <li className='mdc-list-item'>
                                <span className='mdc-list-item__text'>
                                    {user.firstName} {user.lastName}

                                    <span className='mdc-list-item__secondary-text'>
                                        {user.email}
                                    </span>
                                </span>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        );
    }

    renderAddStaffer() {
        if (!this.props.currentUser.admin) return;

        return <Link to='/staff/invite' className='link'>Add Staffer</Link>;
    }

    render() {
        if (!this.props.isReady || !this.props.isCurrentUserReady) return null;

        return (
            <div className='content edit-user-form'>
                <Header type='headline2'><b>Staff Management</b></Header><br />
                {this.renderAddStaffer()}

                {this.renderUserList()}

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.staff.isReady,
        isCurrentUserReady: state.staff.isCurrentUserReady,
        currentUser: state.staff.currentUser,
        users: state.staff.users
    };
}

export default connect(mapStateToProps)(StaffManagement);
