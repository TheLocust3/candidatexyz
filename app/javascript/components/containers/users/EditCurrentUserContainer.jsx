import React from 'react';
import { connect } from 'react-redux';

import { StaffActions } from 'candidatexyz-common-js';
import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import EditUserForm from '../../components/users/EditUserForm';

class EditCurrentUserContainer extends React.Component {

    componentWillMount() {
        this.props.dispatch(StaffActions.fetchCurrentUser());
        this.props.dispatch(setDocumentTitle('Reset Password'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        if (!this.props.isReady) return null;

        return (
            <div className='content sign-in-form'>
                <EditUserForm redirectUrl="/" user={this.props.user} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.staff.isCurrentUserReady,
        user: state.staff.currentUser
    };
}

export default connect(mapStateToProps)(EditCurrentUserContainer);
