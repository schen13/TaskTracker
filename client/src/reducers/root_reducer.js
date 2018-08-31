import { combineReducers } from 'redux';

import entities from './entities/entities_reducer';
import ui from './ui/ui_reducer';
import session from './session_reducer';
import errors from './errors/errors_reducer';

const rootReducer = combineReducers({
    entities,
    ui,
    session,
    errors
});

export default rootReducer;