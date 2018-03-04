import React from 'react';
import { Link } from 'react-router-dom'

import SocialMediaLinks from './SocialMediaLinks';
import ApprovedBy from './ApprovedBy'

export default class Footer extends React.Component {

    render() {
        return (
            <div className='footer'>
                <SocialMediaLinks size={2} />

                <div className='mdc-typography--headline link-holder'>
                    <Link className='link' to='/contact'>Contact</Link>
                    <Link className='link' to='/privacy'>Privacy</Link>
                </div>

                <ApprovedBy style={{ paddingTop: '3%' }} />
            </div>
        );
    }
}
