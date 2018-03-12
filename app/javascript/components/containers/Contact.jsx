import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';

import TextContent from './content/TextContent';
import MessageForm from '../components/MessageForm';

export default class Contact extends React.Component {

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
            <div className='content'>
                <div className='mdc-layout-grid'>
                    <div className='mdc-layout-grid__inner'>
                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-4'>
                            <div className='mdc-typography--display3'><b>Contact</b></div><br />

                            <TextContent identifier='contactBlurb' /><br /><br />

                            <Link to='media-kit' className='link'>Media Kit &raquo;</Link>
                        </div>

                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-8'>
                            <MessageForm />
                        </div>
                    </div>
                </div>

                <div className='mdc-layout-grid__inner'>
                    <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-8' style={{ paddingLeft: '5%' }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.2509632529427!2d-71.06394388451153!3d42.35849057918693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3709b4b5d6127%3A0xbe806688e1e49d85!2s11+Beacon+St%2C+Boston%2C+MA+02108!5e0!3m2!1sen!2sus!4v1520863408329" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
                    </div>

                    <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-4'>
                        <div className='mdc-typography--headline'><b>Visit</b></div>
                        <TextContent identifier='officeAddress' /><br /><br />

                        <div className='mdc-typography--headline'><b>Write</b></div>
                        <TextContent identifier='POBox' /><br /><br />

                        <div className='mdc-typography--headline'><b>Call</b></div>
                        <TextContent identifier='phoneNumber' /><br /><br />
                    </div>
                </div><br />
            </div>
        );
    }
}
