import React from 'react';
import TaskCreateContainer from './task_create_container';

class TaskShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.task.name,
      description: this.props.task.description,
      estTime: this.props.task.estTime,
      deadline: this.props.task.deadline,
      userId: this.props.task.userId,
      groupId: this.props.task.groupId,
      editMode: false
    };

    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick() {
    this.setState({editMode: true});
  }

  editForm() {

  }

  render() {
    let {task} = this.props;
    let form;

    if(this.state.editMode) {
      form =
        <div>
          goodbye
        </div>
      ;
    } else {
      form =
        <div>
          hello
        </div>;
    }
    return(
      <div className="task-modal-container">
        <div className="label">
          <h1>{task.name}</h1>
        </div>
        { form }
      </div>
    );
  }
}

export default TaskShow;