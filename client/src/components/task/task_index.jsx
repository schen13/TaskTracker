import React from 'react';

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