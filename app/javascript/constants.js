import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './components/reducers/root-reducer';

import { createBrowserHistory } from 'history';

export let history = createBrowserHistory();
export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export const MAX_MOBILE_WIDTH = 768;
export const DOMAIN = 'https://candidatexyz.com';
export const STATES = [ 'AL', 'AK', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'AS', 'DC', 'FM', 'GU', 'MH', 'MP', 'PW', 'PR', 'VI' ]
// export const VOLUNTEER_API_DOMAIN = 'http://127.0.0.1:3002' // Should be changed for production
export const VOLUNTEER_API_DOMAIN = 'https://api.candidatexyz.com'
export const USER_API_DOMAIN = 'http://127.0.0.1:3003' // Should be changed for production
