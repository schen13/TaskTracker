import { connect } from 'react-redux';
import { createTask } from '../../actions/task_actions';
import { fetchUsers } from '../../actions/user_actions';
import TaskCreate from './task_create';

const mapStateToProps = (state) => ({
  users: Object.values(state.entities.users)
});

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreate);