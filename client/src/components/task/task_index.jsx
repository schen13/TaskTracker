import React from 'react';
import TaskCreateContainer from './task_create_container';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    if (!this.props.tasks) return null;
    let { tasks } = this.props;

    return (
      <ul className="task-index-container">
        <a className="btn-floating btn waves-effect waves-light red modal-trigger" href="#modal1"><i className="fas fa-plus"></i></a>
        <div id="modal1" className="modal">
          <div className="modal-content">
<<<<<<< HEAD
            <TaskCreateContainer/>
=======
            <TaskCreateContainer />
>>>>>>> f7643fb62016df2a7df3d6973a96cd8d013ee257
          </div>
        </div>
        {tasks.map(task => (
          <li key={task._id}>
            {task.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default TaskIndex;