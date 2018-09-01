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

    return (
      <div className="task-parent-container">
        <button className="btn-floating btn waves-effect waves-light red modal-trigger" data-target="modal1"><i className="fas fa-plus"></i></button>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <TaskCreateContainer/>
          </div>
        </div>
        <ul className="task-index-container collection">
          {tasks.map(task => (
            <li className="collection-item avatar" key={task._id}>
              <i className="fas fa-star-of-life circle green"></i>
              {task.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskIndex;