import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar } from '../actions/global-actions';
import MDCAutoInit from '../components/global/MDCAutoInit';
import TextContent from '../containers/content/TextContent';
import JoinUsForm from '../components/common/JoinUsForm';

class SignUp extends React.Component {

    componentDidMount() {
        this.props.dispatch(setBlankNavbar(true));
    }

    componentWillUnmount() {
        this.props.dispatch(setBlankNavbar(false));
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
