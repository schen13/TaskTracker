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

import {fetchChores, createChore, deleteChore } from './actions/chore_actions';

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

    let task1 = {
      name: "Testing new task",
      description: "hahahahaha",
      estTime: 4,
      deadline: "2016-05-18T16:00:00.000Z"
    };

    let task2 = {
      name: "Testing second new task",
      description: "blah blah blah",
      estTime: 2,
      deadline: "2016-05-18T16:00:00.000Z"
    };

    // window.createChore = store.dispatch(createChore(task1));   
    // window.fetchChores = store.dispatch(fetchChores()); 


    const root = document.getElementById('root');
    ReactDOM.render(<App store={store} />, root);
    registerServiceWorker();
});