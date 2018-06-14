import $ from 'jquery';
import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import Header from '../../components/base/Header';
import Button from '../../components/base/Button';
import TextContent from '../content/TextContent';

import ShowPost from '../posts/ShowPost';

class Help extends React.Component {

    constructor(props) {
        super(props);

        this.state = { slideIndex: 0 };
    }

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Help'));
        this.props.dispatch(setBlankNavbar(true));

        _.range(0, 7).map((index) => {
            $(`#slide${index}`).hide();
        });

        $('#slide0').show();
    }

    onNextClick(event) {
        event.preventDefault();

        let nextSlideIndex = this.state.slideIndex + 1;
        if (nextSlideIndex > 6) {
            nextSlideIndex = 6;
        }

        $(`#slide${nextSlideIndex}`).fadeIn(250);
        $(`#slide${nextSlideIndex - 1}`).fadeOut(250);

        this.setState({
            slideIndex: nextSlideIndex
        });
    }

    onReplayClick(event) {
        event.preventDefault();

        $(`#slide0`).fadeIn(250);
        $(`#slide6`).fadeOut(250);

        this.setState({
            slideIndex: 0
        });
    }

    renderSlide() {
        return (
            <div className='tutorial-slideshow'>
                <Header type='headline6' className='tutorial-slideshow-inner'>
                    <p id='slide0' className='middle'>
                        Click next to begin a quick tutorial on how to use your website.
                    </p>

                    <p id='slide1' className='middle'>
                        Click the button with a pencil on it to enter Edit Mode.
                    </p>

                    <p id='slide2' className='middle'>
                        In Edit Mode you can click on any content that you want to edit (text, images, slideshows, etc).<br />
                        You can also undo certain edits by hitting the undo button.<br />
                        Try editing some of the sample text on this page now. Hit 'Done' (on the bottom of the page) when you are ready to move on.
                    </p>

                    <p id='slide3' className='middle'>
                        The envelope button allows you to send an email to everyone who has signed up on your site.
                    </p>

                    <p id='slide4' className='middle'>
                        Finally, the gear button opens further Staff options.
                    </p>

                    <p id='slide5' className='middle'>
                        <b>Staff Options</b><br />
                        Settings: Edit your personal user settings<br />
                        Staff Management: Manage your staff. Invite staff, update permissions, etc<br />
                        Volunteers: A list of volunteers who have signed up on your site<br />
                        Sign Ups: A list of people who have signed up on your site. Used to send mass emails<br />
                        Edit Other Content: Edit certain content that can't be edited anywhere else (calendars, website name)<br />
                    </p>

                    <p id='slide6' className='middle-center'>
                        <Button onClick={this.onReplayClick.bind(this)}>Replay</Button>
                    </p>
                </Header>

                <Button className='tutorial-slideshow-button' onClick={this.onNextClick.bind(this)}>Next</Button>
            </div>
        )
    }

    render() {
        return (
            <div className='content content-15 content-bottom'>
                <Header type='headline2'>Help</Header><br />

                {this.renderSlide()}
                <br /><br />

                <TextContent identifier='helpSampleText' />
                <br /><br />

                <ShowPost postType='help' url='help-sample-long' headerType='headline4' />
                
                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Help);
