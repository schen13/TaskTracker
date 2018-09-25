import { connect } from 'react-redux';

import { fetchTask, updateTask, deleteTask } from '../../actions/task_actions';
import TaskShow from './task_show';

const mapStateToProps = (state) => ({
  user: state.session.username,
  groups: state.entities.groups
});

const mapDispatchToProps = dispatch => ({
  fetchTask: id => dispatch(fetchTask(id)),
  updateTask: task => dispatch(updateTask(task)),
  deleteTask: id => dispatch(deleteTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskShow);