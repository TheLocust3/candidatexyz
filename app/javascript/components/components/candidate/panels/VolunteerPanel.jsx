import React from 'react';

import Link from '../../base/Link';
import TextContent from '../../../containers/content/TextContent';
import VolunteerForm from '../forms/VolunteerForm';

import PanelWrapper from '../../panels/PanelWrapper';

export default class VolunteerPanel extends React.Component {

    render() {
        return (
            <PanelWrapper className='volunteer-panel'>
                <div className='mdc-typography--display2 panel-headline'><b><TextContent identifier='volunteerPanelHeadline' /></b></div><br />

                <VolunteerForm />
            </PanelWrapper>
        );
    }
}
