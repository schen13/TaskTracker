import React from 'react';
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

  handleSubmit(e) {
    e.preventDefault();
    const task = this.state;
    this.props.createTask(task);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {


    return(
      <div className="task-create-container">
        <div className="label">
          <h1>Create New Task</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field col s6">
            <i className="fas fa-tasks prefix"></i>
            <input autoComplete="off" id="name" type="text" className="validate"/>
            <label htmlFor="name">Name of Task</label>
          </div>
          <div className="input-field col s6">
            <i className="fas fa-comment prefix"></i>
            <input autoComplete="off" id="description" type="text" className="validate" />
            <label htmlFor="description">Additional Info</label>
          </div>
          <div className="input-field col s6">
            <i className="far fa-clock prefix"></i>
            <input autoComplete="off" id="estTime" type="number" className="validate" />
            <label htmlFor="estTime">Estimated Time</label>
          </div>
          <div className="input-field col s6">
            <i className="fas fa-user prefix"></i>
            <select id="userId" value="">
              <option value="" disabled>Assign To?</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
          <div className="input-field col s6">
            <i class="far fa-folder-open prefix"></i>
            <select id="groupId" value="">
              <option value="" disabled>Group?</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
          <div className="input-field">
            <i className="far fa-calendar-alt prefix"></i>
            <input type="text" id="deadline "className="datepicker"/>
            <label htmlFor="deadline">Complete By?</label>
          </div>
          <button className="btn waves-effect waves-light" type="submit"> Create Task </button>
          
        </form>

      </div>
    );
  }
}

export default withRouter(TaskCreate);
