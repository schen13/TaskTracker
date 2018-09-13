import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const GET_ERRORS = 'GET_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = user => dispatch => (
    APIUtil.registerUser(user).then(res => {
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        APIUtil.setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
    }, err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    })
);

export const login = user => dispatch => (
    APIUtil.loginUser(user).then(res => {
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        APIUtil.setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
    }, err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
    )
);

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    APIUtil.setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(logoutCurrentUser());
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: RECEIVE_CURRENT_USER,
        payload: decoded
    };
};

export const removeSessionErrors = () => ({
    type: REMOVE_SESSION_ERRORS
});