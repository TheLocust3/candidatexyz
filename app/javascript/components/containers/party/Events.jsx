import React from 'react';
import { connect } from 'react-redux';

import { setDocumentTitle, setBlankNavbar } from '../../actions/global-actions';
import MDCAutoInit from '../../components/global/MDCAutoInit';
import ContentApi from '../../../api/content-api';

import Header from '../../components/base/Header';
import TextContent from '../../containers/content/TextContent';
import ShowPost from '../../containers/posts/ShowPost';

class Events extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = { calendarUrl: '' };
    }

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Events'));
        this.props.dispatch(setBlankNavbar(true));

        ContentApi.get('partyCalendarUrl').then( data => {
            this.setState({
                calendarUrl: data.content
            });
        });
    }
    
    render() {
        return (
            <div className='content content-20 content-bottom'>
                <Header type='headline2'><TextContent identifier='partyEventsHeadline' /></Header>
                <ShowPost postType='party-events' url='party-events-blurb' />

                <iframe src={`${this.state.calendarUrl}&amp;showTitle=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;color=%235F6B02&amp;ctz=America%2FNew_York`} style={{ borderWidth: 0 }} width='800' height='600' frameBorder='0' scrolling='no' />

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Events);
