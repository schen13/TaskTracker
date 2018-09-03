import React from 'react';
import Moment from 'moment';

class TaskShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.task._id,
      name: this.props.task.name,
      description: this.props.task.description,
      estTime: this.props.task.estTime,
      deadline: this.props.task.deadline,
      userId: this.props.task.userId,
      groupId: this.props.task.groupId,
      completed: this.props.task.completed
    };
    this.handleMark = this.handleMark.bind(this);
  }

  handleMark(e) {
    e.preventDefault();
    //If already marked as completed, make it incomplete:

    const task = {
      _id: this.state._id,
      name: this.state.name,
      description: this.state.description,
      estTime: this.state.estTime,
      deadline: this.state.deadline,
      userId: this.state.userId,
      groupId: this.state.groupId
    };

    if (this.state.completed === true) {
      task.completed = false;
      this.setState({ completed: false });
    } else {
      task.completed = true;
      this.setState({ completed: true });
    }

    this.props.updateTask(task);
  }

  render() {
    let { task } = this.props;
    let buttonText = this.state.completed ? "Mark as Incomplete" : "Mark as Complete";

    return (
      <div className="task-modal-container">
        <div className="label">
          <div className="task-title">
            <h1>{task.name}</h1>
            {this.state.completed ? <i className="fas fa-check fa-2x"></i> : <i className="fas fa-times fa-2x"></i>}
          </div>
          <h2>{this.props.group[task.groupId].name}</h2>
        </div>
        <div>
          <div className="row">
            <div className="input-field col s6">
              <i className="fas fa-tasks prefix"></i>
              <input
                disabled
                autoComplete="off"
                value={task.name}
                id="name" type="text"
                className="validate"
              />
              <label className="active" htmlFor="name">Name of Task</label>
            </div>
            <div className="input-field col s6">
              <i className="fas fa-comment prefix"></i>
              <input
                disabled
                autoComplete="off"
                value={task.description}
                id="description"
                type="text"
                className="validate"
              />
              <label className="active" htmlFor="description">Additional Info</label>
            </div>
            <div className="input-field col s6">
              <i className="far fa-clock prefix"></i>
              <input
                disabled
                autoComplete="off"
                value={task.estTime}
                id="estTime"
                type="number"
                className="validate"
              />
              <label className="active" htmlFor="estTime">Estimated Time</label>
            </div>
            <div className="input-field col s6">
              <i className="far fa-calendar-alt prefix"></i>
              <input
                disabled
                type="date"
                value={Moment(task.deadline).utc().format("YYYY-MM-DD")}
              />
            </div>
          </div>
          <div className="complete-button">
            <button onClick={this.handleMark} className="btn waves-effect waves-light modal-close"> {buttonText} </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskShow;