import {
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            console.log(action.payload, "hello")
            return {
                id: action.payload.user._id,
                username: action.payload.user.username,
                fName: action.payload.user.fName,
                lName: action.payload.user.lName,
                email: action.payload.user.email
            };
        default:
            return state;
    }
};

export default sessionReducer;
