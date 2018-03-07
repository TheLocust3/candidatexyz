import React from 'react';
import { Link } from 'react-router-dom';

export default class JoinTeamPanel extends React.Component {

    render() {
        return (
            <div className='join-team-panel'>
                <div className='join-team-panel-content'>
                    <div className='join-team-panel-background join-team-panel-color'>
                        <div className='mdc-typography--display3'><b>Join Team CandidateXYZ</b></div>
                    </div>

                    <div className='join-team-panel-actions mdc-typography--headline'>
                        <Link to="/sign_up"><button className="mdc-button mdc-button--raised button join-team-panel-color" data-mdc-auto-init="MDCRipple">Sign Up</button></Link>
                        <a href="https://secure.actblue.com"><button className="mdc-button mdc-button--raised button join-team-panel-color" data-mdc-auto-init="MDCRipple">Donate</button></a>
                    </div>
                </div>
            </div>
        );
    }
}
