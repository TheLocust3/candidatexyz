import React from 'react';
import { Link } from 'react-router-dom'

import SocialMediaLinks from './SocialMediaLinks';
import ApprovedBy from './ApprovedBy';
import SimpleLinkContent from '../../containers/content/SimpleLinkContent';

export default class Footer extends React.Component {

    render() {
        return (
            <div className='footer'>
                <SocialMediaLinks size={2} />

                <div className='mdc-typography--headline link-holder'>
                    <SimpleLinkContent identifier='footerContact' className='link' />
                    <SimpleLinkContent identifier='footerPrivacy' className='link' />
                </div>

                <div className='mdc-typography--body1 footerStaffLogin'>
                    <Link className='link' to='/sign_in' style={{ fontSize: 18 }}>Staff Login</Link>
                </div>

                <ApprovedBy style={{ paddingTop: '3%' }} />
            </div>
        );
    }
}
