import React from 'react';
import { connect } from 'react-redux';

import Link from '../../components/base/Link';
import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import SignInForm from '../../components/users/SignInForm';

class SignInContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Sign In'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        return (
            <div className='content sign-in-form'>
                <SignInForm redirectUrl='/home' /><br />

                <Link className='link-small' to='/forgot-password'>Forgot password?</Link>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(SignInContainer);
