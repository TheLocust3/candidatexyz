import { combineReducers } from 'redux';

import { userReducer } from './user-reducer';
import { contactReducer } from './contact-reducer';

const reducer = combineReducers({
    users: userReducer,
    contacts: contactReducer
});

export default reducer;
