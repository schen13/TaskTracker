import { combineReducers } from 'redux';

import session from './session_reducer';
import errorsReducer from './errors_reducer';
import chore from './chore_reducer';

const rootReducer = combineReducers({
    session,
    chore,
    errors: errorsReducer
});

export default rootReducer;