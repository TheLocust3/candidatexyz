import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../actions/global-actions';
import MDCAutoInit from '../components/global/MDCAutoInit';
import TextContent from '../containers/content/TextContent';
import JoinUsForm from '../components/forms/JoinUsForm';

class SignUp extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Sign Up'));
        this.props.dispatch(setBlankNavbar(true));
    }
    
    render() {
        return (
            <div>
                <div className='sign-up'>
                    <div className='mdc-typography--headline'><b><TextContent identifier='signUpHeader' /></b></div><br />
                    
                    <div className='sign-up-form'>
                        <div className='mdc-typography--title'><b><TextContent identifier='signUpSubtitle' /></b></div><br />

                        <JoinUsForm />
                    </div>
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(SignUp);
