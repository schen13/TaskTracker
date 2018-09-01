import React from 'react';
import Select from 'react-select';

import { withRouter } from 'react-router-dom';

class TaskCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      estTime: "",
      deadline: "",
      userId: "",
      groupId: "",
      validGroups: [],
      validUsers: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = {
      name: this.state.name,
      description: this.state.description,
      estTIme: this.state.estTime,
      deadline: "2016-05-18T16:00:00Z",
      userId: this.state.userId,
      groupId: this.state.groupId
    };

    this.props.createTask(task);
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

  updateDeadline(deadline) {
    return e => this.setState({
      deadline: e.currentTarget.value
    });
  }

  render() {
    if (!this.props.users) return null;

    let { users, groups } = this.props;
    let userOptions = [];
    users.map(user => {
      userOptions.push({
        label: user.username,
        value: user.id
      });
    });

    let groupOptions = [];
    groups.map(group => {
      groupOptions.push({
        label: group.name,
        value: group._id
      });
    });


    return (
      <div className="task-create-container">
        <div className="label">
          <h1>Create New Task</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <i className="fas fa-tasks prefix"></i>
              <input autoComplete="off" id="name" type="text" className="validate" onChange={this.update("name")} />
              <label htmlFor="name">Name of Task</label>
            </div>
            <div className="input-field col s6">
              <i className="fas fa-comment prefix"></i>
              <input autoComplete="off" id="description" type="text" className="validate" onChange={this.update("description")} />
              <label htmlFor="description">Additional Info</label>
            </div>
            <div className="input-field col s6">
              <i className="far fa-clock prefix"></i>
              <input autoComplete="off" id="estTime" type="number" className="validate" onChange={this.update("estTime")} />
              <label htmlFor="estTime">Estimated Time</label>
            </div>
            <div className="input-field col s6">
              <i className="far fa-calendar-alt prefix"></i>
              <input type="text" id="deadline " className="datepicker" onChange={this.update("deadline")} ref={(date) => { this.date = date; }} />
              <label htmlFor="deadline">Complete By?</label>
            </div>
            <div className="input-field col s6">
              <i className="fas fa-user prefix"></i>
              <Select id="userId" options={userOptions} isSearchable="true" placeholder="Assign To?" onChange={user => this.updateUser(user)}/>
            </div>
            <div className="input-field col s6">
              <i className="far fa-folder-open prefix"></i>
              <Select id="groupId" options={groupOptions} isSearchable="true" placeholder="Which Group?" onChange={group => this.updateGroup(group)}/>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit"> Create Task </button>     
        </form>
      </div>
    );
  }
}

export default withRouter(TaskCreate);
