import { combineReducers } from 'redux';

import { staffReducer } from './staff-reducer';
import { campaignReducer } from './campaign-reducer';
import { contactReducer } from './contact-reducer';
import { volunteerReducer } from './volunteer-reducer';
import { contentReducer } from './content-reducer';
import { messageReducer } from './message-reducer';
import { postReducer } from './post-reducer';
import { imageReducer } from './image-reducer';
import { themeReducer } from './theme-reducer';
import { panelReducer } from './panel-reducer';
import { pageReducer } from './page-reducer';
import { globalReducer } from './global-reducer';

const reducer = combineReducers({
    staff: staffReducer,
    campaigns: campaignReducer,
    contacts: contactReducer,
    volunteers: volunteerReducer,
    content: contentReducer,
    messages: messageReducer,
    posts: postReducer,
    images: imageReducer,
    themes: themeReducer,
    panels: panelReducer,
    pages: pageReducer,
    global: globalReducer
});

export default reducer;
