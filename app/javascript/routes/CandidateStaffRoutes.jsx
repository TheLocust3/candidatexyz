import React from 'react';
import { Route } from 'react-router-dom';

import EditRawContent from '../components/containers/candidate/EditRawContent';

export function candidateStaffRoutes() {
    return [
        <Route exact path='/staff/edit-content' component={EditRawContent} key='1' />,
    ];
}
