import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

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
            <div className='content signInForm'>
                <ForgotPasswordForm redirectUrl="/" /><br />
                <Link to="/sign-in">Sign in</Link>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(ForgotPasswordContainer);
