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
          <div class="input-field col s6">
            <i class="fas fa-tasks prefix"></i>
            <input autocomplete="off" id="name" type="text" class="validate"/>
            <label for="name">Name of Task</label>
          </div>
          <div class="input-field col s6">
            <i class="fas fa-comment prefix"></i>
            <input autocomplete="off" id="description" type="text" class="validate" />
            <label for="description">Additional Info</label>
          </div>
          <div class="input-field col s6">
            <i class="far fa-clock prefix"></i>
            <input autocomplete="off" id="estTime" type="number" class="validate" />
            <label for="estTime">Estimated Time</label>
          </div>
          <div class="input-field col s6">
            <i class="fas fa-user prefix"></i>
            <select id="userId">
              <option value="" disabled selected>Assign To?</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            {/* <label for="userId">Assign To?</label> */}
          </div>
          <div className="input-field">
            <i class="far fa-calendar-alt prefix"></i>
            <input type="text" id="deadline "class="datepicker"/>
            <label for="deadline">Complete By?</label>
          </div>
          <button type="submit"> Create Task </button>
        </form>

      </div>
    );
  }
}

export default withRouter(TaskCreate);
