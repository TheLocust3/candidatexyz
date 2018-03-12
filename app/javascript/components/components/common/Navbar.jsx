import React from 'react';
import { Link } from 'react-router-dom';

import ImageContent from '../../containers/content/ImageContent';
import SimpleLinkContent from '../../containers/content/SimpleLinkContent';
import ExternalLinkContent from '../../containers/content/ExternalLinkContent';

export default class Navbar extends React.Component {

    render() {
        return (
            <div className='header-image'>
                <div className='navbar'>
                    <Link to='/'><ImageContent identifier='logo' className='navbar-image' /></Link>

                    <div className='navbar-actions'>
                        <div className='button-cell'><SimpleLinkContent identifier='navLink1' className='link' /></div>
                        <div className='button-cell'><SimpleLinkContent identifier='navLink2' className='link' /></div>
                        <div className='button-cell'><ExternalLinkContent identifier='donate'><button className='mdc-button mdc-button--raised button' data-mdc-auto-init='MDCRipple'>Donate</button></ExternalLinkContent></div>
                    </div>
                </div>
            </div>
        );
    }
}
