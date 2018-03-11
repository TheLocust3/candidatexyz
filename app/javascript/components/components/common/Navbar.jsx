import React from 'react';
import { Link } from 'react-router-dom';

import ImageContent from '../../containers/content/ImageContent';

export default class Navbar extends React.Component {

    render() {
        return (
            <div className='header-image'>
                <div className='navbar'>
                    <Link to='/'><ImageContent identifier='logo' className='navbar-image' /></Link>

                    <div className='navbar-actions'>
                        <div className='button-cell'><Link className='link' to='/meet'>Meet CandidateXYZ</Link></div>
                        <div className='button-cell'><Link className='link' to='/action'>Take Action</Link></div>
                        <div className='button-cell'><a href='https://www.actblue.com'><button className='mdc-button mdc-button--raised button' data-mdc-auto-init='MDCRipple'>Donate</button></a></div>
                    </div>
                </div>
            </div>
        );
    }
}
