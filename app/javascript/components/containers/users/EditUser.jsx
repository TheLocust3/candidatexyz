import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { history } from '../../../constants';
import StaffApi from '../../../api/staff-api';
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

    onDeleteClick() {
        StaffApi.destroy(this.props.user.id).then(() => {
            history.push('/staff-management');
        });
    }

    render() {
        if (!this.props.isReady || _.isEmpty(this.props.user)) return null;

        return (
            <div className='content editUserForm'>
                <div className='mdc-typography--display2'><b>Edit User</b></div><br />
                <a href='#' className='link' onClick={this.onDeleteClick.bind(this)}>Delete</a>

                <MasterEditUserForm redirectUrl='/staff-management' user={this.props.user} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.staff.isReady,
        user: state.staff.user
    };
}

export default connect(mapStateToProps)(EditUser);
