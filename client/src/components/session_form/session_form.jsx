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
            lName: ''
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
        this.props.processForm(user);
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
        if (this.props.formType === "signup") {
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
        console.log(this.props)
        const pass2 = this.props.formType === "signup" ? 
            (
            < label > Confirm Password:
                <input type="password"
                    value={this.state.password2}
                    onChange={this.update('password2')}
                    className="login-input"
                />
            </label >
                    ) : (null)
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to TASKS_APP_NAME!
                    <br />
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>Email:
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        {this.additionalParams()}
                        <br />
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        {pass2}
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);