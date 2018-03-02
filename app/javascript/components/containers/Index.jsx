import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCurrentUser } from '../actions/user-actions';
import AuthApi from '../../api/auth-api';

class Index extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchCurrentUser());
    }

    handleSignOut() {
        AuthApi.signOut().then( (response) => {
            window.location.href = '/';
        })
    }

    render() {
        if (!this.props.isReady) return null;

        return (
            <div>
                Hello World!
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.users.isReady,
        user: state.users.user
    };
}

export default connect(mapStateToProps)(Index);
