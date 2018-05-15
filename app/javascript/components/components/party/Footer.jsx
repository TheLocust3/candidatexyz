import React from 'react';
import { connect } from 'react-redux';

import Header from '../base/Header';
import Link from '../base/Link';
import SocialMediaLinks from '../global/SocialMediaLinks';
import SimpleLinkContent from '../../containers/content/SimpleLinkContent';

class Footer extends React.Component {

    render() {
        if (this.props.fullscreen) return null;

        return (
            <div className='footer'>
                <SocialMediaLinks size={2} />

                <Header type='headline5' className='link-holder'>
                    <SimpleLinkContent identifier='footerContact' className='link' />
                    <SimpleLinkContent identifier='footerPrivacy' className='link' />
                </Header>

                <Header type='body1' className='footer-staff-login'>
                    <Link className='link' to='/sign-in' style={{ fontSize: 18 }}>Staff Login</Link>
                </Header>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        fullscreen: state.global.fullscreen
    };
}

export default connect(mapStateToProps)(Footer);
