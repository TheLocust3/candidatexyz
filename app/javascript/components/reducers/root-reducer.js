import { combineReducers } from 'redux';

import { userReducer } from './user-reducer';
import { contactReducer } from './contact-reducer';
import { contentReducer } from './content-reducer';
import { messageReducer } from './message-reducer';
import { globalReducer } from './global-reducer';

const reducer = combineReducers({
    users: userReducer,
    contacts: contactReducer,
    content: contentReducer,
    message: messageReducer,
    global: globalReducer
});

export default reducer;
