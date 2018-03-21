import $ from 'jquery';
import React from 'react';

import MDCAutoInit from '../components/common/MDCAutoInit';

import TextContent from '../containers/content/TextContent';
import ImageContent from '../containers/content/ImageContent';
import JoinTeamPanel from '../components/common/JoinTeamPanel';

export default class Action extends React.Component {

    componentDidMount() {
        $('.header-image').css('background-image', 'url()');
        $('.navbar .link').addClass('inverted-link');
        $('.header-image').addClass('header-image-blank');
    }

    componentWillUnmount() {
        $('.navbar .link').removeClass('inverted-link');
        $('.header-image').removeClass('header-image-blank');
    }

    render() {
        return (
            <div>
                <div className='take-action'>
                    <div className='mdc-typography--display3'><b><TextContent identifier='actionHeader' /></b></div><br />
                    <div className='mdc-typography--headline'><TextContent identifier='actionSubtitle' /></div><br />

                    <p className='take-action-text'>
                        <TextContent identifier='actionBody' /><br /><br />

                        <TextContent identifier='actionEnding' /><br />
                        
                        <ImageContent identifier='actionSignature' />
                    </p>
                </div>

                <JoinTeamPanel />

                <MDCAutoInit />
            </div>
        );
    }
}
