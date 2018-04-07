import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../actions/global-actions';
import MDCAutoInit from '../components/global/MDCAutoInit';
import TextContent from './content/TextContent';
import MessageForm from '../components/forms/MessageForm';

class Contact extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Contact Us'));
        this.props.dispatch(setBlankNavbar(true));
    }

    render() {
        return (
            <div className='content'>
                <div className='mdc-layout-grid'>
                    <div className='mdc-layout-grid__inner'>
                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-4-desktop'>
                            <div className='mdc-typography--display3'><b><TextContent identifier='contactHeader' /></b></div><br />

                            <TextContent identifier='contactBlurb' /><br /><br />

                            <Link to='media-kit' className='link'>Media Kit &raquo;</Link>
                        </div>

                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-8'>
                            <MessageForm />
                        </div>
                    </div>
                </div>

                <div className='map-container'>
                    <iframe className='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.2509632529427!2d-71.06394388451153!3d42.35849057918693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3709b4b5d6127%3A0xbe806688e1e49d85!2s11+Beacon+St%2C+Boston%2C+MA+02108!5e0!3m2!1sen!2sus!4v1520863408329' width='600' height='450' frameBorder='0' style={{ border: 0 }} allowFullScreen></iframe>

                    <div className='map-blurb'>
                        <div className='mdc-typography--headline'><b><TextContent identifier='contactVisitHeadline' /></b></div>
                        <TextContent identifier='contactVisitAddress' /><br /><br />

                        <div className='mdc-typography--headline'><b><TextContent identifier='contactPOBoxHeadline' /></b></div>
                        <TextContent identifier='contactPOBoxAddress' /><br /><br />

                        <div className='mdc-typography--headline'><b><TextContent identifier='contactCallHeadline' /></b></div>
                        <TextContent identifier='contactPhoneNumber' /><br /><br />
                    </div>
                </div><br />

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Contact);
