import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './components/reducers/root-reducer';

import { createBrowserHistory } from 'history';

export let history = createBrowserHistory();
export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export const MAX_MOBILE_WIDTH = 768;
export const STATES = [ 'AL', 'AK', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'AS', 'DC', 'FM', 'GU', 'MH', 'MP', 'PW', 'PR', 'VI' ];

export const LOCAL = false;

export const DOMAIN = LOCAL ? 'http://127.0.0.1:3001' : 'https://candidatexyz.com';
export const VOLUNTEER_API_DOMAIN = LOCAL ? 'http://127.0.0.1:3002' : 'https://api.candidatexyz.com';
export const USER_API_DOMAIN = LOCAL ? 'http://127.0.0.1:3003' : 'https://auth.candidatexyz.com';
export const MAILER_API_DOMAIN = LOCAL ? 'http://127.0.0.1:3004' : 'https://mailer.candidatexyz.com';
