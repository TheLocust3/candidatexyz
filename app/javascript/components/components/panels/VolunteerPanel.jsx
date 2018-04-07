import React from 'react';
import { Link } from 'react-router-dom';

import TextContent from '../../containers/content/TextContent';
import VolunteerForm from '../forms/VolunteerForm';

export default class VolunteerPanel extends React.Component {

    render() {
        return (
            <div className='volunteer-panel'>
                <div className='mdc-typography--display2 panel-headline'><b><TextContent identifier='volunteerPanelHeadline' /></b></div><br />

                <VolunteerForm />
            </div>
        );
    }
}
