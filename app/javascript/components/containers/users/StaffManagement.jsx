import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { fetchCurrentUser, fetchAllUsers } from '../../actions/staff-actions';
import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';

class StaffManagement extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchCurrentUser());
        this.props.dispatch(fetchAllUsers());
        this.props.dispatch(setDocumentTitle('Staff Management'));
        this.props.dispatch(setBlankNavbar(true));
    }

    renderUserList() {
        return (
            <ul className='mdc-list mdc-list--two-line'>
                {this.props.users.map((user) => {
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

    render() {
        if (!this.props.isReady) return null;

        return (
            <div className='content edit-user-form'>
                <div className='mdc-typography--display2'><b>Staff Management</b></div><br />
                <Link to='/staff/invite' className='link'>Add Staffer</Link>

                {this.renderUserList()}

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.staff.isReady,
        currentUser: state.staff.currentUser,
        users: state.staff.users
    };
}

export default connect(mapStateToProps)(StaffManagement);
