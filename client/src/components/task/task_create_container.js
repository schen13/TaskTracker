import { connect } from 'react-redux';
import { createTask } from '../../actions/task_actions';
import TaskCreate from './task_create';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreate);