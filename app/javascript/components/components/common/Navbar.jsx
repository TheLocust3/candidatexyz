import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {

    render() {
        return (
            <div className='header-image'>
                <div className='navbar'>
                    <Link to='/'><img src='https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59933e3e7131a5f7bfb18c09/1518809293655/?format=1500w' className='navbar-image' /></Link>

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
