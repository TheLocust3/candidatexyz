import React from 'react';
import { connect } from 'react-redux';

import Link from '../base/Link';
import SocialMediaLinks from '../global/SocialMediaLinks';
import SimpleLinkContent from '../../containers/content/SimpleLinkContent';

class Footer extends React.Component {

    render() {
        if (this.props.fullscreen) return null;

        return (
            <div className='footer'>
                <SocialMediaLinks size={2} />

                <div className='mdc-typography--headline link-holder'>
                    <SimpleLinkContent identifier='footerContact' className='link' />
                    <SimpleLinkContent identifier='footerPrivacy' className='link' />
                </div>

                <div className='mdc-typography--body1 footerStaffLogin'>
                    <Link className='link' to='/sign-in' style={{ fontSize: 18 }}>Staff Login</Link>
                </div>
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
