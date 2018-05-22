import React from 'react';
import { Route } from 'react-router-dom';

import EditRawContent from '../components/containers/party/EditRawContent';

export function partyStaffRoutes() {
    return [
        <Route exact path='/staff/edit-content' component={EditRawContent} key='1' />,
    ];
}
