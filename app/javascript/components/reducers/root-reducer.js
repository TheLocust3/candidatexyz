import { combineReducers } from 'redux';

import { staffReducer } from './staff-reducer';
import { contactReducer } from './contact-reducer';
import { volunteerReducer } from './volunteer-reducer';
import { contentReducer } from './content-reducer';
import { messageReducer } from './message-reducer';
import { postReducer } from './post-reducer';
import { imageReducer } from './image-reducer';
import { globalReducer } from './global-reducer';

const reducer = combineReducers({
    staff: staffReducer,
    contacts: contactReducer,
    volunteers: volunteerReducer,
    content: contentReducer,
    messages: messageReducer,
    posts: postReducer,
    images: imageReducer,
    global: globalReducer
});

export default reducer;
