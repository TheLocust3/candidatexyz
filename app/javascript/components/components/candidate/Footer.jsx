import React from 'react';
import { connect } from 'react-redux';

import { APP_DOMAIN } from '../../../constants';

import Link from '../base/Link';
import Header from '../base/Header';
import SocialMediaLinks from '../global/SocialMediaLinks';
import ApprovedBy from './common/ApprovedBy';
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
                    <a className='link' href={`${APP_DOMAIN}/sign_in`} style={{ fontSize: 18 }}>Staff Login</a>
                </Header>

                <ApprovedBy style={{ paddingTop: '3%' }} />
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
