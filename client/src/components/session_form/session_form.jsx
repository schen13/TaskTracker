import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      fName: '',
      lName: '',
      password2: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push('/'));
  }

  renderErrors() {
    return (
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  additionalParams() {
    if (this.props.formType === "Signup") {
      return (
        <div>
          <label>Username:
                        <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
            />
          </label>
          <label>First Name:
                        <input type="text"
              value={this.state.fName}
              onChange={this.update('fName')}
              className="login-input"
            />
          </label>
          <label>Last Name:
                        <input type="text"
              value={this.state.lName}
              onChange={this.update('lName')}
              className="login-input"
            />
          </label>
        </div>
      )
    };
  }

  render() {
    const pass2 = this.props.formType === "Signup" ?
      (
        < label > Confirm Password:
                <input type="password"
            value={this.state.password2}
            onChange={this.update('password2')}
            className="session-input"
          />
        </label >
      ) : (null)
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <h3>Welcome to TaskTracker!</h3>
          <h4>Please {this.props.formType}!</h4>
          {this.renderErrors()}
          <div className="session-form">
            <br />
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="session-input"
              />
            </label>
            {this.additionalParams()}
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
              />
            </label>
            {pass2}
            <input className="session-submit" type="submit" value={this.props.formType} />
            <div onClick={this.props.clearErrors}>
              {this.props.navLink}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(SessionForm);