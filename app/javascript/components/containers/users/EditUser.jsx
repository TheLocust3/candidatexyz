import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { fetchUser } from '../../actions/staff-actions';
import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import MasterEditUserForm from '../../components/users/MasterEditUserForm';

class EditUser extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchUser(this.props.match.params.id));
        this.props.dispatch(setDocumentTitle('Reset Password'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        if (!this.props.isReady) return null;

        return (
            <div className='content editUserForm'>
                <MasterEditUserForm redirectUrl='/staff-management' user={this.props.user} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.staff.isReady,
        user: state.staff.currentUser
    };
}

export default connect(mapStateToProps)(EditUser);
