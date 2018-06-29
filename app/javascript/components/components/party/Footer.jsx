import React from 'react';
import { connect } from 'react-redux';

import { APP_DOMAIN } from '../../../constants';

import Header from '../base/Header';
import Link from '../base/Link';
import SocialMediaLinks from '../global/SocialMediaLinks';
import SimpleLinkContent from '../../containers/content/SimpleLinkContent';

class Footer extends React.Component {

    render() {
        return (
            <div className='footer'>
                <SocialMediaLinks size={2} />

                <Header type='headline5' className='link-holder'>
                    <SimpleLinkContent identifier='footerPrivacy' className='link' />
                    <a className='link' href={`${APP_DOMAIN}/sign_in`}>Staff Login</a>
                </Header>

                <Header type='body1' className='footer-staff-login' style={{ fontSize: 12 }}>
                    <div className='made-with' onClick={() => window.location.href = 'https://candidatexyz.com' }>
                        Created with <b>candidateXYZ</b>.
                    </div>
                </Header>
            </div>
        );
    }
}

export default connect()(Footer);
