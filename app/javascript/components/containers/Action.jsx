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
                <div className='take-action'>
                    <div className='mdc-typography--display3'><b>Take Action.</b></div><br />
                    <div className='mdc-typography--headline'>MAKE A DIFFERENCE</div><br />

                    <p className='take-action-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa efficitur, laoreet ex malesuada, scelerisque sem. Nam porttitor elit at felis molestie aliquet. Sed id metus massa. Etiam congue magna eget vulputate hendrerit. Proin hendrerit maximus ipsum, ut lobortis sem ultrices et. Integer quis odio egestas, tristique purus sit amet, pretium ante. Pellentesque tincidunt mollis libero non imperdiet.
                        <br /><br />
                        Join me.
                        <br />
                        <img src='https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/599d08df197aea73adf91e33/1503463674117/seth-moulton-navy.png?format=300w' />
                    </p>
                </div>

                <JoinTeamPanel />
            </div>
        );
    }
}
