import { connect } from 'react-redux';
import { createTask } from '../../actions/task_actions';
import TaskCreate from './task_create';

const mapStateToProps = (state) => ({
  // users: Object.values(state.entities.users)
});

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreate);