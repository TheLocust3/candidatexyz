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
    }

    onNextClick(event) {
        event.preventDefault();

        this.setState({
            slideIndex: this.state.slideIndex + 1
        });
    }

    renderSlide() {
        return (
            <div className='tutorial-slideshow'>
                <Header type='headline6' className='tutorial-slideshow-inner'>
                    <p className={`tutorial-slide middle ${this.state.slideIndex == 0 ? 'tutorial-slide-visible' : ''}`}>
                        Click the button with a pencil on it to enter Edit Mode.
                    </p>

                    <p className={`tutorial-slide middle ${this.state.slideIndex == 1 ? 'tutorial-slide-visible' : ''}`}>
                        In Edit Mode you can click on any content that you want to edit (text, images, slideshows, etc).<br />
                        You can also undo certain edits by hitting the undo button.<br />
                        Try editing some of the sample text on this page now. Hit 'Done' (on the bottom of the page) when you are ready to move on.
                    </p>

                    <p className={`tutorial-slide middle ${this.state.slideIndex == 2 ? 'tutorial-slide-visible' : ''}`}>
                        The envelope button allows you to send an email to everyone who has signed up on your site.
                    </p>

                    <p className={`tutorial-slide middle ${this.state.slideIndex == 3 ? 'tutorial-slide-visible' : ''}`}>
                        Finally, the gear button opens further Staff options.
                    </p>

                    <p className={`tutorial-slide middle ${this.state.slideIndex == 4 ? 'tutorial-slide-visible' : ''}`}>
                        <b>Settings:</b> Edit your personal user settings<br />
                        <b>Staff Management:</b> Manage your staff. Invite staff, update permissions, etc<br />
                        <b>Volunteers:</b> A list of volunteers who have signed up on your site<br />
                        <b>Sign Ups:</b> A list of people who have signed up on your site. Used to send mass emails<br />
                        <b>Edit Other Content:</b> Edit certain content that can't be edited anywhere else (calendars, website name)<br />
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
