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
                    return (
                        <Link className='unstyled-link' key={user.id} to={`/staff-management/${user.id}/edit`}>
                            <li className='mdc-list-item'>
                                <span className='mdc-list-item__text'>
                                    {user.first_name} {user.last_name}

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
            <div className='content editUserForm'>
                <div className='mdc-typography--display2'><b>Staff Management</b></div><br />

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
