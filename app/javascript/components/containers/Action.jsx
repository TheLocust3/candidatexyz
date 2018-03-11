import $ from 'jquery';
import React from 'react';

import TextContent from '../containers/content/TextContent';
import JoinTeamPanel from '../components/common/JoinTeamPanel';

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
                <div className='take-action'>
                    <div className='mdc-typography--display3'><b><TextContent identifier='takeAction' /></b></div><br />
                    <div className='mdc-typography--headline'><TextContent identifier='takeActionSubtitle' /></div><br />

                    <p className='take-action-text'>
                        <TextContent identifier='takeActionBody' />
                        <br /><br />
                        <TextContent identifier='takeActionEnding' />
                        <br />
                        <img src='https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/599d08df197aea73adf91e33/1503463674117/seth-moulton-navy.png?format=300w' />
                    </p>
                </div>

                <JoinTeamPanel />
            </div>
        );
    }
}
