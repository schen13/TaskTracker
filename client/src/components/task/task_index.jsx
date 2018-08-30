import React from 'react';
import TaskCreateContainer from './task_create_container';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    if (!this.props.tasks) return null;
    let { tasks } = this.props;

    return(
      <ul className="task-index-container">
        <button data-target="modal1" className="btn modal-trigger">Modal</button>
        <div id="modal1" class="modal">
          <div className="modal-content">
            <TaskCreateContainer/>
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