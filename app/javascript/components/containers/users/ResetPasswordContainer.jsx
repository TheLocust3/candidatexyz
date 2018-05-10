import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import Link from '../../components/base/Link';
import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import ResetPasswordForm from '../../components/users/ResetPasswordForm';

class ResetPasswordContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Reset Password'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        let parsed = queryString.parse(location.search);

        return (
            <div className='content sign-in-form'>
                <ResetPasswordForm redirectUrl="/" token={parsed.reset_password_token} /><br />
                <Link to="/sign-in">Sign in</Link>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(ResetPasswordContainer);
