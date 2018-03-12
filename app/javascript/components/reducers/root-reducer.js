import { combineReducers } from 'redux';

import { userReducer } from './user-reducer';
import { contactReducer } from './contact-reducer';
import { contentReducer } from './content-reducer';
import { messageReducer } from './message-reducer';

const reducer = combineReducers({
    users: userReducer,
    contacts: contactReducer,
    content: contentReducer,
    message: messageReducer
});

export default reducer;
