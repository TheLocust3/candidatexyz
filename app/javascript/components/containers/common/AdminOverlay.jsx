import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { fetchCurrentUser } from '../../actions/user-actions';

class AdminOverlay extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchCurrentUser());
    }

    render() {
        if (!this.props.isReady || _.isEmpty(this.props.user)) return null;

        return (
            <div>
                test
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

export default connect(mapStateToProps)(AdminOverlay);
