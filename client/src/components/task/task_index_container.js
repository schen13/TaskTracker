import { connect } from 'react-redux';

import { fetchTasks, deleteTask } from '../../actions/task_actions';
import TaskIndex from './task_index';

const mapStateToProps = (state) => ({
   tasks: Object.values(state.entities.tasks)
});

const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(fetchTasks()),
  deleteTask: id => dispatch(deleteTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);