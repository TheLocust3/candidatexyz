import React from 'react';
import { Link } from 'react-router-dom';

import JoinCard from '../components/common/JoinCard';
import Slideshow from '../components/common/Slideshow';

export default class Index extends React.Component {

    render() {
        return (
            <div>
                <JoinCard />

                <div className='content'>
                    <Slideshow images={[ 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/59b80b5eccc5c57630823222/59b80b5ef43b558af35fdbde/1506485137482/IMG_1527+copy.JPG?format=1000w', 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/59b80b5eccc5c57630823222/59e773aeb07869e5602d55c0/1508340678954/IMG_1790+copy.JPG?format=1000w', 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/59b80b5eccc5c57630823222/59b80b7c37c581a69ce50d65/1506485130673/DSC_2874+copy.JPG?format=1000w', 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/59b80b5eccc5c57630823222/59b80b692994caa2f5fe13f4/1506485127056/140712-0622.jpg?format=1000w', 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/59b80b5eccc5c57630823222/59cb2374ccc5c5f4ec3125b0/1506485120534/P1070026+copy.JPG?format=1000w' ]}>
                        <div className='mdc-typography--headline'>
                            <b>CandidateXYZ is working to put people over politics, ensure that every American has the opportunity to succeed, and tackle the towering challenges of today and tomorrow.</b>
                        </div><br />

                        <Link to='/meet' className='link'><div className='mdc-typography--headline'>MEET CANDIDATEXYZ &raquo;</div></Link>
                    </Slideshow>

                    <div className='final-panel'>
                        <img className='background-image' src='https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59c33b9c18b27d0daca27f1e/1503727352927/unspecified-43.jpg?format=2500w' />

                        <div className='final-panel-content'>
                            <div className='final-panel-background final-panel-color'>
                                <div className='mdc-typography--display3'><b>Join Team CandidateXYZ</b></div>
                            </div>

                            <div className='final-panel-actions mdc-typography--headline'>
                                <Link to="/sign_up"><button className="mdc-button mdc-button--raised button final-panel-color" data-mdc-auto-init="MDCRipple">Sign Up</button></Link>
                                <a href="https://secure.actblue.com"><button className="mdc-button mdc-button--raised button final-panel-color" data-mdc-auto-init="MDCRipple">Donate</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
