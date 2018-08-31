import {
  RECEIVE_TASK,
  RECEIVE_TASKS,
  REMOVE_TASK
} from '../../actions/task_actions';

import merge from 'lodash/merge';

const taskReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_TASK:
      const newTask = {
        [action.task._id]: action.task
      };
      return merge(nextState, newTask);

    case RECEIVE_TASKS:
      action.tasks.forEach(task => {
        nextState[task._id] = task;
      });
      return nextState;

    case REMOVE_TASK:
      delete nextState[action.task._id];
      return nextState;

    default:
      return state;
  }
};

export default taskReducer;

