import React from 'react';

class GroupCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      values: [],
      focusedValue: -1,
      isFocused: false,
      isOpen: false,
      typed: ''
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.onClick = this.onClick.bind(this);
    this.onDeleteOption = this.onDeleteOption.bind(this);
    this.onHoverOption = this.onHoverOption.bind(this);
    this.onClickOption = this.onClickOption.bind(this);

    this.renderUsername = this.renderUsername.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newGroup = {
      name: this.state.name,
      users: this.state.values.map(username => this.props.usernameMapping[username])
    };
    this.props.createGroup(newGroup);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  onFocus() {
    this.setState({ isFocused: true });
  }

  onBlur() {
    this.setState({
      focusedValue: -1,
      isFocused: false,
      isOpen: false
    });
  }

  onClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  onDeleteOption(e) {
    const { value } = e.currentTarget.dataset;

    this.setState(prevState => {
      const [...values] = prevState.values;
      const index = values.indexOf(value);

      values.splice(index, 1);

      return { values };
    });
  }

  onHoverOption(e) {
    const { usernames } = this.props;

    const { value } = e.currentTarget.dataset;
    const index = usernames.findIndex(option => option.value === value);

    this.setState({ focusedValue: index });
  }

  onClickOption(e) {

    const { value } = e.currentTarget.dataset;

    this.setState(prevState => {

      const [...values] = prevState.values;
      const index = values.indexOf(value);

      if (index === -1) {
        values.push(value);
      } else {
        values.splice(index, 1);
      }

      return { values };
    });
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  renderValues() {
    const placeholder = "Pick Group Members";
    const { values } = this.state;

    if (values.length === 0) {
      return (
        <div className="placeholder">
          {placeholder}
        </div>
      );
    }

    return values.map(value => (
      <span
        key={value}
        onClick={this.stopPropagation}
        className="multiple value"
      >
        {value}
        <span
          data-value={value}
          onClick={this.onDeleteOption}
          className="delete"
        >
          <RemoveButton />
        </span>
      </span>
    ));
  }

  renderUsernames() {
    const { usernames } = this.props;
    const { isOpen } = this.state;

    if (!isOpen) return null;

    return (
      <div className="usernames">
        {usernames.map(this.renderUsername)}
      </div>
    );
  }

  renderUsername(username, index) {
    const { values, focusedValue } = this.state;
    const { value } = username;
    if (!value) return null;

    const selected = values.includes(value);
    let className = "username";
    if (selected) className += " selected";
    if (index === focusedValue) className += " focused";

    return (
      <div
        key={value}
        data-value={value}
        className={className}
        onMouseOver={this.onHoverOption}
        onClick={this.onClickOption}
      >
        <span className="checkbox">
          {selected ? <CheckMark /> : null}
        </span>
        {value}
      </div>
    );
  }

  render() {
    const label = "Select Group Members";
    const { isOpen } = this.state;
    return (

      <div className="group-create-container">
        <div className="label">
          <h1>Create New Group</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field col s6">
            <input
              autoComplete="off"
              id="name"
              type="text"
              className="validate"
              onChange={this.update('name')}
            />
            <label htmlFor="name">Name of Group</label>
          </div>
          <div
            className="select"
            tabIndex="0"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onKeyDown={this.onKeyDown}
          >
            <label className="label">{label}</label>
            <div className="selection" onClick={this.onClick}>
              {this.renderValues()}
              <span className="arrow">
                {isOpen ? <UpArrow /> : <DownArrow />}
              </span>
            </div>
            {this.renderUsernames()}
          </div>
          <button className="btn waves-effect waves-light" type="submit"> Create Group </button>

        </form>

      </div>
    );
  }
}

const DownArrow = () => (
  <svg viewBox="0 0 10 7">
    <path d="M2.08578644,6.5 C1.69526215,6.89052429 1.69526215,7.52368927 2.08578644,7.91421356 C2.47631073,8.30473785 3.10947571,8.30473785 3.5,7.91421356 L8.20710678,3.20710678 L3.5,-1.5 C3.10947571,-1.89052429 2.47631073,-1.89052429 2.08578644,-1.5 C1.69526215,-1.10947571 1.69526215,-0.476310729 2.08578644,-0.0857864376 L5.37867966,3.20710678 L2.08578644,6.5 Z" transform="translate(5.000000, 3.207107) rotate(90.000000) translate(-5.000000, -3.207107) " />
  </svg>
);

const UpArrow = () => (
  <svg viewBox="0 0 10 8">
    <path d="M2.08578644,7.29289322 C1.69526215,7.68341751 1.69526215,8.31658249 2.08578644,8.70710678 C2.47631073,9.09763107 3.10947571,9.09763107 3.5,8.70710678 L8.20710678,4 L3.5,-0.707106781 C3.10947571,-1.09763107 2.47631073,-1.09763107 2.08578644,-0.707106781 C1.69526215,-0.316582489 1.69526215,0.316582489 2.08578644,0.707106781 L5.37867966,4 L2.08578644,7.29289322 Z" transform="translate(5.000000, 4.000000) rotate(-90.000000) translate(-5.000000, -4.000000) " />
  </svg>
);

const RemoveButton = () => (
  <svg viewBox="0 0 16 16">
    <path d="M2 .594l-1.406 1.406.688.719 5.281 5.281-5.281 5.281-.688.719 1.406 1.406.719-.688 5.281-5.281 5.281 5.281.719.688 1.406-1.406-.688-.719-5.281-5.281 5.281-5.281.688-.719-1.406-1.406-.719.688-5.281 5.281-5.281-5.281-.719-.688z" />
  </svg>
);

const CheckMark = () => (
  <svg viewBox="0 0 16 16">
    <path d="M13 .156l-1.406 1.438-5.594 5.594-1.594-1.594-1.406-1.438-2.844 2.844 1.438 1.406 3 3 1.406 1.438 1.406-1.438 7-7 1.438-1.406-2.844-2.844z" transform="translate(0 1)" />
  </svg>
);

export default GroupCreate;