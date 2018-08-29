import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import jwt_decode from 'jwt-decode';
import { setCurrentUser, logoutUser } from './actions/session_actions';
import * as APIUtil from './util/session_api_util';
//Components
import configureStore from './store/store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createChore, fetchChore, fetchChores, deleteChore } from './actions/chore_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();
    // Check for token
    if (localStorage.jwtToken) {
        // Set auth token header auth
        APIUtil.setAuthToken(localStorage.jwtToken);
        // Decode token and get user info and exp
        const decoded = jwt_decode(localStorage.jwtToken);
        // Set user and isAuthenticated
        store.dispatch(setCurrentUser(decoded));

        // Check for expired token
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            // Logout user
            store.dispatch(logoutUser());
            // Redirect to login
            window.location.href = '/login';
        }
    }

    // window.createChore = createChore();
    // window.fetchChore = fetchChore();
    window.fetchChores = fetchChores;
    // window.deleteChore = deleteChore();

    const root = document.getElementById('root');
    ReactDOM.render(<App store={store} />, root);
    registerServiceWorker();
});