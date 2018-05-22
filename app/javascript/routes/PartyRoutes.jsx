import React from 'react';
import { Route } from 'react-router-dom';

import Index from '../components/containers/party/Index';
import AboutUs from '../components/containers/party/AboutUs';
import Events from '../components/containers/party/Events';

export function partyRoutes() {
    return [
        <Route exact path='/' component={Index} key='1' />,
        <Route exact path='/about' component={AboutUs} key='2' />,
        <Route exact path='/events' component={Events} key='3' />
    ];
}
