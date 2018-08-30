import * as TaskApiUtil from '../util/task_api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS'; 
export const REMOVE_TASK = 'REMOVE_TASK';

export const receiveTask = payload => ({
  type: RECEIVE_TASK,
  task: payload.data
});

export const receiveTasks = payload => ({
  type: RECEIVE_TASKS,
  tasks: payload.data.tasks
});

export const removeTask = payload => ({
  type: REMOVE_TASK,
  task: payload.data.task
});

export const fetchTasks = () => dispatch => (
  TaskApiUtil.fetchTasks().then(tasks => dispatch(receiveTasks(tasks)))
);

export const fetchTask = id => dispatch => (
  TaskApiUtil.fetchTask(id).then(task => dispatch(receiveTask(task)))
);

export const createTask = task => dispatch => (
  TaskApiUtil.createTask(task).then(newTask => dispatch(receiveTask(newTask)))
);

export const updateTask = task => dispatch => (
  TaskApiUtil.updateTask(task).then(updatedTask => dispatch(receiveTask(updatedTask)))
);

export const deleteTask = id => dispatch => (
  TaskApiUtil.deleteTask(id).then(task => dispatch(removeTask(task)))
);