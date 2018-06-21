import { combineReducers } from 'redux';

import { staffReducer, campaignReducer, contactReducer, volunteerReducer, messageReducer } from 'candidatexyz-common-js';
import { contentReducer } from './content-reducer';
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
