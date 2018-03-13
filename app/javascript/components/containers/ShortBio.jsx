import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';

import TextContent from '../containers/content/TextContent';

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
            <div className='content short-bio'>
                <div className='mdc-typography--display3'><b><TextContent identifier='shortBioHeader' /></b></div><br />
                <TextContent identifier='shortBioBlurb' /><br /><br />
            </div>
        );
    }
}
