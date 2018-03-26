import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { setBlankNavbar } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import SignInForm from '../../components/users/SignInForm';

class SignInContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        return (
            <div className='content signInForm'>
                <SignInForm redirectUrl='/home' /><br />

                <Link className='link-small' to='/forgot-password'>Forgot password?</Link>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(SignInContainer);
