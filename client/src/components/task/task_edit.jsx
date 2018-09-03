import React from 'react';
import Select from 'react-select';
import { Modal } from 'react-materialize';
import IconButton from '@material-ui/core/IconButton';
import Moment from 'moment';

class TaskEdit extends React.Component {
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
      validUsers: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = {
      _id: this.state._id,
      name: this.state.name,
      description: this.state.description,
      estTime: this.state.estTime,
      deadline: this.state.deadline,
      userId: this.state.userId,
      groupId: this.state.groupId
    };

    this.props.updateTask(task);
    this.props.snack();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateUser(user) {
    this.setState({
      userId: user.value
    });
  }

  updateGroup(group) {
    this.setState({
      groupId: group.value
    });
  }

  render() {
    let { users, task } = this.props;
    let userOptions = [];
    users.forEach(user => {
      userOptions.push({
        label: user.username,
        value: user.id
      });
    });

    return (
      <Modal trigger={<IconButton><i className="fas fa-pencil-alt edit-task"></i></IconButton>}>
        <div className="task-modal-container">
          <div className="label">
            <h1>Edit - {task.name}</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <i className="fas fa-tasks prefix"></i>
                <input
                  autoComplete="off"
                  value={this.state.name}
                  id="name" type="text"
                  className="validate"
                  onChange={this.update("name")}
                />
                <label className="active" htmlFor="name">Name of Task</label>
              </div>
              <div className="input-field col s6">
                <i className="fas fa-comment prefix"></i>
                <input
                  autoComplete="off"
                  value={this.state.description}
                  id="description"
                  type="text"
                  className="validate"
                  onChange={this.update("description")}
                />
                <label className="active" htmlFor="description">Additional Info</label>
              </div>
              <div className="input-field col s6">
                <i className="far fa-clock prefix"></i>
                <input
                  autoComplete="off"
                  value={this.state.estTime}
                  id="estTime"
                  type="number"
                  className="validate"
                  onChange={this.update("estTime")}
                />
                <label className="active" htmlFor="estTime">Estimated Time</label>
              </div>
              <div className="input-field col s6">
                <i className="far fa-calendar-alt prefix"></i>
                <input 
                  type="date"
                  onChange={this.update("deadline")}
                  value={Moment(this.state.deadline).format("YYYY-MM-DD")}
                />
              </div>
              <div className="input-field col s12">
                <i className="fas fa-user prefix"></i>
                <Select
                  id="userId"
                  options={userOptions}
                  isSearchable="true"
                  placeholder="Assign To?"
                  onChange={user => this.updateUser(user)}
                />
              </div>
            </div>
            <div id="close-button">
              <button className="btn waves-effect waves-light modal-close" type="submit"> Update Task </button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

export default TaskEdit;
