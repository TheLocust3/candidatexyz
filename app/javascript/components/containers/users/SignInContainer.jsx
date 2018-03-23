import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom'

import MDCAutoInit from '../../components/common/MDCAutoInit';
import SignInForm from '../../components/users/SignInForm';

export default class SignInContainer extends React.Component {

    componentDidMount() {
        $('.header-image').addClass('header-image-blank');
        $('.header-image').css('background-image', 'url()');
        $('.navbar .link').addClass('inverted-link');
    }

    componentWillUnmount() {
        $('.header-image').removeClass('header-image-blank');
        $('.navbar .link').removeClass('inverted-link');
    }

    render() {
        return (
            <div className='content signInForm'>
                <SignInForm redirectUrl='/' /><br />

                <Link className='link-small' to='/forgot-password'>Forgot password?</Link>

                <MDCAutoInit />
            </div>
        );
    }
}
