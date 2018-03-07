import $ from 'jquery';
import React from 'react';

import JoinUsForm from '../components/JoinUsForm';

export default class SignUp extends React.Component {

    componentDidMount() {
        $('.header-image').css('background-image', 'url()');
        $('.navbar .link').addClass('inverted-link');
    }

    componentWillUnmount() {
        $('.navbar .link').removeClass('inverted-link');
    }

    render() {
        return (
            <div>
                <div className='sign-up'>
                    <div className='mdc-typography--headline'><b>Join us!</b></div><br />
                    
                    <div className='sign-up-form'>
                        <div className='mdc-typography--title'><b>How can we reach you?</b></div><br />

                        <JoinUsForm />
                    </div>
                </div>
            </div>
        );
    }
}
