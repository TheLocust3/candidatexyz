import React from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {

    render() {
        return (
            <div>
                <div className="navbar">
                    <img src="https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59933e3e7131a5f7bfb18c09/1518809293655/?format=1500w" className="navbar-image" />

                    <div className="navbar-actions">
                        <div className="button-cell"><Link className='link' to="/meet">Meet CandidateXYZ</Link></div>
                        <div className="button-cell"><Link className='link' to="/action">Take Action</Link></div>
                        <div className="button-cell"><Link to="https://www.actblue.com"><button className="mdc-button mdc-button--raised button" data-mdc-auto-init="MDCRipple">Donate</button></Link></div>
                    </div>
                </div>

                <div className="jumbotron">
                    <img src="https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59cd9e5032601e2e1011ec17/1506647684440/Seth-headshot-smile.jpg?format=2500w" style={{ width: "100%" }} />
                </div>
            </div>
        );
    }
}
