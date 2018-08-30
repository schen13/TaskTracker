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
            return {
                id: action.payload.id,
                username: action.payload.username,
            };
        default:
            return state;
    }
};

export default sessionReducer;
