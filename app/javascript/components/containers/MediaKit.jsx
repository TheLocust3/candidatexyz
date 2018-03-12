import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';

import TextContent from '../containers/content/TextContent';
import ImageContent from '../containers/content/ImageContent';

export default class Meet extends React.Component {

    componentDidMount() {
        $('.header-image').addClass('header-image-blank');
        $('.header-image').css('background-image', 'url()');
        $('.navbar .link').addClass('inverted-link');
    }

    componentWillUnmount() {
        $('.header-image').removeClass('header-image-blank');
        $('.navbar .link').removeClass('inverted-link');
    }

    render() {
        return (
            <div className='content media-kit'>
                <div className='mdc-typography--display3'><b>Media Kit</b></div><br />

                <div className='mdc-typography--headline'><b>Press Contact</b></div><br />
                <TextContent identifier='pressSecretaryContact' /><br /><br />

                <div className='mdc-typography--headline'><b>Biography</b></div><br />
                Visit Meet Seth for information about Seth.<br /><br />
                Click <Link to='/short-bio'>here</Link> for an abbreviated biography.<br /><br />

                <div className='mdc-typography--headline'><b>Photos</b></div><br />
                <div className="mdc-layout-grid">
                    <div className="mdc-layout-grid__inner">
                        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6"><ImageContent identifier='photo1' className='media-photo' /></div>
                        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6"><ImageContent identifier='photo2' className='media-photo' /></div>
                    </div>

                    <div className="mdc-layout-grid__inner">
                        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6"><ImageContent identifier='photo3' className='media-photo' /></div>
                        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6"><ImageContent identifier='photo4' className='media-photo' /></div>
                    </div>
                </div>
            </div>
        );
    }
}
