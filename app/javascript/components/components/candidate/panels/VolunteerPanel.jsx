import React from 'react';

import Header from '../../base/Header';
import Link from '../../base/Link';
import TextContent from '../../../containers/content/TextContent';
import VolunteerForm from '../forms/VolunteerForm';

import PanelWrapper from '../../panels/PanelWrapper';

export default class VolunteerPanel extends React.Component {

    render() {
        return (
            <PanelWrapper className='volunteer-panel'>
                <Header type='display2' className='panel-headline'><b><TextContent identifier='volunteerPanelHeadline' /></b></Header><br />

                <VolunteerForm />
            </PanelWrapper>
        );
    }
}
