import React from 'react';
import { connect } from 'react-redux';

import { setBlankNavbar, setDocumentTitle } from '../actions/global-actions';
import MDCAutoInit from '../components/global/MDCAutoInit';

import TextContent from '../containers/content/TextContent';
import ImageContent from '../containers/content/ImageContent';
import JoinTeamPanel from '../components/panels/JoinTeamPanel';
import VolunteerPanel from '../components/panels/VolunteerPanel';

class Action extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Take Action'));
        this.props.dispatch(setBlankNavbar(true));
    }
    
    render() {
        return (
            <div>
                <div className='take-action'>
                    <div className='mdc-typography--display3'><b><TextContent identifier='actionHeader' /></b></div><br />
                    <div className='mdc-typography--headline'><TextContent identifier='actionSubtitle' /></div><br />

                    <p className='content-20 take-action-text'>
                        <TextContent identifier='actionBody' /><br /><br />

                        <TextContent identifier='actionEnding' /><br />
                        
                        <ImageContent identifier='actionSignature' />
                    </p>
                </div>

                <JoinTeamPanel />
                
                <VolunteerPanel />

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Action);
