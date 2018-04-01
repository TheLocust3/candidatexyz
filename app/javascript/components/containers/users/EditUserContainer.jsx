import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { fetchCurrentUser } from '../../actions/user-actions';
import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import EditUserForm from '../../components/users/EditUserForm';

class EditUserContainer extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchCurrentUser());
        this.props.dispatch(setDocumentTitle('Reset Password'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        if (!this.props.isReady) return null;

        return (
            <div className='content editUserForm'>
                <EditUserForm redirectUrl="/" user={this.props.user} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.users.isReady,
        user: state.users.currentUser
    };
}

export default connect(mapStateToProps)(EditUserContainer);
