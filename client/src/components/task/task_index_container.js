import { connect } from 'react-redux';

import { fetchTasks, deleteTask } from '../../actions/task_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import TaskIndex from './task_index';

const mapStateToProps = (state) => {
  let tasks = Object.values(state.entities.tasks)
    .filter(task => task.userId === state.session.id
  );
  //Sort the tasks by the deadline. Oldest ones first
  tasks.sort((a,b) => {
    if(a.deadline <= b.deadline)
      return -1;
    else
    return 1;
  });

  return({
    tasks: tasks,
    users: Object.values(state.entities.users)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(fetchTasks()),
  deleteTask: id => dispatch(deleteTask(id)),
  fetchUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);