import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import jwt_decode from 'jwt-decode';
import { setCurrentUser, logoutUser } from './actions/session_actions';
import * as APIUtil from './util/session_api_util';
//Components
import configureStore from './store/store';
import Root from './components/root';
import registerServiceWorker from './registerServiceWorker';

import { createTask } from './actions/task_actions';

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
      name: "Wash the dishes",
      description: "Don't forget to wash the rag!",
      estTime: 1,
      userId: "5b859aa4cc16e04d88b47052",
      groupId: 1,
      deadline: "2016-05-18T16:00:00.000Z"
    };

    let task2 = {
      name: "Walk the dog",
      description: "Don't feed him treats",
      estTime: 1,
      userId: "5b859aa4cc16e04d88b47052",
      groupId: 1,
      deadline: "2016-05-18T16:00:00.000Z"
    };

    let task3 = {
      name: "Take out the trash",
      description: "Be careful the bag doesn't rip",
      estTime: 1,
      userId: "5b859aa4cc16e04d88b47052",
      groupId: 1,
      deadline: "2016-05-18T16:00:00.000Z"
    };

    let task4 = {
      name: "Take out the trash againnnnnnn",
      description: "Be careful the bag doesn't rip",
      estTime: 1,
      userId: "5b859aa4cc16e04d88b47052",
      groupId: 1,
      deadline: "2016-05-18T16:00:00.000Z"
    };

    // store.dispatch(createTask(task1));
    // store.dispatch(createTask(task2));
    // store.dispatch(createTask(task3));
    // store.dispatch(createTask(task4));


    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    registerServiceWorker();
});