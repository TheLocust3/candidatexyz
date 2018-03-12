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
                    <SimpleLinkContent identifier='contact' className='link' />
                    <SimpleLinkContent identifier='privacy' className='link' />
                </div>

                <ApprovedBy style={{ paddingTop: '3%' }} />
            </div>
        );
    }
}
