import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { history } from '../../../constants';
import StaffApi from '../../../api/staff-api';
import Header from '../../components/base/Header';
import Link from '../../components/base/Link';
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
            history.push('/staff/staff-management');
        });
    }

    render() {
        if (!this.props.isReady || _.isEmpty(this.props.user)) return null;

        return (
            <div className='content sign-in-form'>
                <Header type='display2'><b>Edit User</b></Header><br />
                <Link to='#' className='link' onClick={this.onDeleteClick.bind(this)}>Delete</Link>

                <MasterEditUserForm redirectUrl='/staff/staff-management' user={this.props.user} />

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
