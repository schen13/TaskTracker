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
      groupId: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }


  handleSubmit(e) {
    e.preventDefault();
    const task = this.state;
    this.props.createTask(task);
  }

  update(field) {
    console.log(this.state);
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    if (!this.props.users) return null;
    let { users } = this.props;

    return (
      <div className="task-create-container">
        <div className="label">
          <h1>Create New Task</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
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
            <i className="fas fa-user prefix"></i>
            <select id="userId" value="" onChange={this.update("userId")}>
              <option value="">The number of users is {users.length}</option>
              {users.map(user => (
                <UserItem key={user._id} user={user} />
              ))}
            </select>
          </div>
          <div className="input-field col s6">
            <i className="far fa-folder-open prefix"></i>
            <Select id="groupId" options={options} onChange={this.update("groupId")}>
              {/* <option value="" disabled>Group?</option> */}
            </Select>
          </div>
          <div className="input-field">
            <i className="far fa-calendar-alt prefix"></i>
            <input type="text" id="deadline "className="datepicker" onChange={this.update("deadline")}/>
            <label htmlFor="deadline">Complete By?</label>
          </div>
          <button className="btn waves-effect waves-light" type="submit"> Create Task </button>     
        </form>
      </div>
    );
  }
}

const UserItem = (props) => (
  <option value={props.user._id}>{props.user.username}</option>
);

export default withRouter(TaskCreate);
