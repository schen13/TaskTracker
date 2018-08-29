import * as APIUtil from '../util/chat_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CHATS = 'RECEIVE_CHATS';
export const RECEIVE_CHAT = 'RECEIVE_CHAT';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveChats = userId => ({
  type: RECEIVE_CHATS,
  userId
});

export const receiveChat = userId => ({
  type: RECEIVE_CHAT,
  userId
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
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
    console.log(err, "hello");
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
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
    console.log(decoded, "decoded")
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
  dispatch(setCurrentUser({}));
};

// export const logoutUser = () => dispatch => (
//   APIUtil.logoutUser().then(() => (
//     dispatch(logoutCurrentUser())
//   ))
// );

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: RECEIVE_CHATS,
    payload: decoded
  };
};