import _ from 'lodash';
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCurrentUser } from '../components/actions/user-actions';

import EditRawContent from '../components/containers/EditRawContent';
import EditPost from '../components/containers/posts/EditPost';
import CreatePost from '../components/containers/posts/CreatePost';
import EditUserContainer from '../components/containers/users/EditUserContainer';
import StaffManagement from '../components/containers/users/StaffManagement';

class StaffRoutes extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchCurrentUser());
    }

    render() {
        if (_.isEmpty(this.props.user)) return null;

        return (
            <div>
                <Route exact path='/edit-content' component={EditRawContent} />
                <Route exact path='/users/edit' component={EditUserContainer} />
                <Route exact path='/staff-management' component={StaffManagement} />

                <Route exact path='/posts/:postType/:url/edit' component={EditPost} />
                <Route exact path='/posts/:postType/new' component={CreatePost} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.users.currentUser
    };
}

export default connect(mapStateToProps)(StaffRoutes);
