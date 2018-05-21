import _ from 'lodash';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCurrentUser } from '../components/actions/staff-actions';

import EditRawContent from '../components/containers/candidate/EditRawContent';
import EditPost from '../components/containers/posts/EditPost';
import CreatePost from '../components/containers/posts/CreatePost';
import EditCurrentUserContainer from '../components/containers/users/EditCurrentUserContainer';
import StaffManagement from '../components/containers/users/StaffManagement';
import MasterEditUserForm from '../components/containers/users/EditUser';
import Mail from '../components/containers/staff/Mail';
import InviteStaff from '../components/containers/staff/InviteStaff';
import VolunteerOverview from '../components/containers/volunteers/VolunteerOverview';
import Volunteer from '../components/containers/volunteers/Volunteer';
import StaffOverview from '../components/containers/staff/StaffOverview';
import MessageOverview from '../components/containers/staff/MessageOverview';
import ShowMessage from '../components/containers/staff/ShowMessage';
import SignUpOverview from '../components/containers/staff/SignUpOverview';
import Themes from '../components/containers/staff/Themes';
import ThemeEditor from '../components/containers/staff/ThemeEditor';

import StaffDevelopmentRoutes from './StaffDevelopmentRoutes';

class StaffRoutes extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchCurrentUser());
    }

    render() {
        if (_.isEmpty(this.props.user)) return null;

        return (
            <Route path='/staff'>
                <Switch>
                    <Route exact path='/staff/edit-content' component={EditRawContent} />
                    <Route exact path='/staff/edit-user' component={EditCurrentUserContainer} />
                    <Route exact path='/staff/staff-management' component={StaffManagement} />
                    <Route exact path='/staff/staff-management/:id/edit' component={MasterEditUserForm} />
                    <Route exact path='/staff' component={StaffOverview} />
                    <Route exact path='/staff/messages' component={MessageOverview} />
                    <Route exact path='/staff/messages/:id' component={ShowMessage} />
                    <Route exact path='/staff/sign-ups' component={SignUpOverview} />
                    <Route exact path='/staff/mail' component={Mail} />
                    <Route exact path='/staff/invite' component={InviteStaff} />

                    <Route exact path='/staff/volunteers' component={VolunteerOverview} />
                    <Route exact path='/staff/volunteers/:id' component={Volunteer} />

                    <Route exact path='/staff/posts/:postType/:url/edit' component={EditPost} />
                    <Route exact path='/staff/posts/:postType/new' component={CreatePost} />

                    <Route exact path='/staff/themes' component={Themes} />
                    <Route exact path='/staff/themes/new' component={ThemeEditor} />
                    <Route exact path='/staff/themes/:name' component={ThemeEditor} />

                    <StaffDevelopmentRoutes />
                </Switch>
            </Route>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.staff.currentUser
    };
}

export default connect(mapStateToProps)(StaffRoutes);
