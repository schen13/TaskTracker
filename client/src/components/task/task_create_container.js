import { connect } from 'react-redux';
import { createTask } from '../../actions/task_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import TaskCreate from './task_create';

const mapStateToProps = (state) => ({
  users: Object.values(state.entities.users)
    .filter(user => user.username)
    .sort((a, b) => {
      if(a.username < b.username)
        return -1;
      else
        return 1;
    }),
  groups: Object.values(state.entities.groups)
    .filter(group => group.name)
    .sort((a, b) => {
      if (a.name < b.name)
        return -1;
      else
        return 1;
    })
});

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task)),
  fetchUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreate);