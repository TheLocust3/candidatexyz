import { combineReducers } from 'redux';

import { userReducer } from './user-reducer';
import { contactReducer } from './contact-reducer';
import { contentReducer } from './content-reducer';
import { messageReducer } from './message-reducer';
import { postReducer } from './post-reducer';
import { globalReducer } from './global-reducer';

const reducer = combineReducers({
    users: userReducer,
    contacts: contactReducer,
    content: contentReducer,
    messages: messageReducer,
    posts: postReducer,
    global: globalReducer
});

export default reducer;
