import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import Header from '../../components/base/Header';
import TextContent from '../../containers/content/TextContent';
import JoinUsForm from '../../components/candidate/forms/JoinUsForm';

class SignUp extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Sign Up'));
        this.props.dispatch(setBlankNavbar(true));
    }
    
    render() {
        return (
            <div>
                <div className='content sign-up'>
                    <Header type='headline2'><b><TextContent identifier='signUpHeader' /></b></Header><br />
                    
                    <div className='content-25'>
                        <Header type='headline6'><b><TextContent identifier='signUpSubtitle' /></b></Header><br />

                        <JoinUsForm />
                    </div>
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(SignUp);
