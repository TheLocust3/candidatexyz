import $ from 'jquery';
import React from 'react';

import JoinTeamPanel from '../components/common/JoinTeamPanel'

export default class Action extends React.Component {

    componentDidMount() {
        $('.header-image').css('background-image', 'url()');
        $('.navbar .link').addClass('inverted-link');
    }

    componentWillUnmount() {
        $('.navbar .link').removeClass('inverted-link');
    }

    render() {
        return (
            <div>
                <div className='sign-up'>
                    <div className='mdc-typography--headline'><b>Join us!</b></div><br />
                    
                    <div className='sign-up-form'>
                        <div className='mdc-typography--title'><b>How can we reach you?</b></div><br />
                    </div>
                </div>
            </div>
        );
    }
}
