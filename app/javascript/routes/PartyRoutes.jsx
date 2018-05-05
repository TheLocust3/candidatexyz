import React from 'react';
import { Route } from 'react-router-dom';

import Index from '../components/containers/party/Index';

export function partyRoutes() {
    return [
        <Route exact path='/' component={Index} key='1' />
    ];
}
