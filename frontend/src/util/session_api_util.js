import axios from 'axios';

// const $ = window.$; //wildcard to grab everything defined on the window


// We can use axios to set a default header
export const setAuthToken = token => {
    if (token) {
        // Apply to every request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common['Authorization'];
    }
};

// Register User
export const registerUser = userData => (
    axios.post('/api/users/register', userData)
);

// Login - Get User Token
export const loginUser = userData => (
    axios.post('/api/users/login', userData)
);



