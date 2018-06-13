import React from 'react';
import { connect } from 'react-redux';

import Link from '../../components/base/Link';
import Header from '../../components/base/Header';
import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import ForgotPasswordForm from '../../components/users/ForgotPasswordForm';

class ForgotPasswordContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Reset Password'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        return (
            <div className='content sign-in-form'>
                <Header type='headline2'>Forgot Password</Header><br />

                <ForgotPasswordForm redirectUrl="/" /><br />
                <Link to="/sign-in">Sign in</Link>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(ForgotPasswordContainer);
