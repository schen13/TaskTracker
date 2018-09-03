import React from 'react';

class TaskShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.task.name,
      description: this.props.task.description,
      estTime: this.props.task.estTime,
      deadline: this.props.task.deadline,
      userId: this.props.task.userId,
      groupId: this.props.task.groupId
    };
  }

  componentDidMount() {

  }

  render() {
    let {task} = this.props;

    return(
      <div className="task-modal-container">
        <div className="label">
          <h1>{task.name}</h1>
        </div>
      </div>
    );
  }
}

export default TaskShow;