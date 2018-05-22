import React from 'react';
import { Route } from 'react-router-dom';

import Index from '../components/containers/party/Index';
import Events from '../components/containers/party/Events';
import GetInvolved from '../components/containers/party/GetInvolved';

export function partyRoutes() {
    return [
        <Route exact path='/' component={Index} key='1' />,
        <Route exact path='/events' component={Events} key='2' />,
        <Route exact path='/get-involved' component={GetInvolved} key='3' />
    ];
}
