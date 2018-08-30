import { combineReducers } from 'redux';

import session from './session_reducer';
import errors from './errors/errors_reducer';
import entities from './entities/entities_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    errors
});

export default rootReducer;