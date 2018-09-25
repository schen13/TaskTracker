import React from "react";
import io from "socket.io-client";

class ChatCreate extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io.connect();

    this.state = {
      participantNames: [],
      groupUsers: this.props.users,
      query: "",
      queryResults: [],
      errors: "",
      //Chat Params
      name: "",
      participants: [this.props.currentUser.id],
      //Message Params
      chatId: "",
      body: "",
      author: this.props.currentUser.id,
      anon: false
    };

    this.handleName = this.handleName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleClickParticipants = this.handleClickParticipants.bind(this);
    this.removeParticipant = this.removeParticipant.bind(this);
    this.filterUsers = this.filterUsers.bind(this);
    this.handleChatSubmit = this.handleChatSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleName(e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
  }

  handleInput(e) {
    e.preventDefault();
    const userQuery = e.currentTarget.value;
    this.setState({ query: userQuery }, () => {
      if (userQuery === "") {
        this.setState({ queryResults: [] });
      } else {
        this.filterUsers(userQuery);
      }
    });
  }

  handleMessage(e) {
    e.preventDefault();
    this.setState({ body: e.currentTarget.value });
  }

  filterUsers(userQuery) {
    let searchQuery = [];
    this.state.groupUsers.filter(user => {
      if (!this.state.participants.includes(user.id)) {
        if (
          (user.username &&
            user.username.toLowerCase().search(userQuery.toLowerCase()) !==
            -1) ||
          (user.fName &&
            user.fName.toLowerCase().search(userQuery.toLowerCase()) !== -1) ||
          (user.lName &&
            user.fName.toLowerCase().search(userQuery.toLowerCase()) !== -1)
        ) {
          if (searchQuery.length < 7) return searchQuery.push(user);
        }
      }
      return searchQuery;
    });
    this.setState({ queryResults: searchQuery });
  }

  handleClickParticipants(user) {
    let participant = { username: user.username, id: user.id };
    if (!participant.username)
      participant.username = `${user.fName} ${user.lName}`;
    this.setState({
      participants: [...this.state.participants, user.id],
      participantNames: [...this.state.participantNames, participant],
      query: "",
      queryResults: []
    });
  }

  removeParticipant(userId) {
    this.setState({
      participants: this.state.participants.filter(id => id !== userId),
      participantNames: this.state.participantNames.filter(
        user => user.id !== userId
      )
    });
  }

  renderErrors(errors) {
    this.setState({ errors });
  }

  handleChatSubmit(e) {
    e.preventDefault();
    const { name, participants } = this.state;
    this.socket.emit("newChat", { name, participants });
    this.socket.on("error", err => {
      this.renderErrors(err);
    });
    this.socket.on("newChatCreated", chatId => {
      this.setState({ chatId }, () => {
        const { chatId, body, author, anon } = this.state;
        this.props.replyToChat({ chatId, body, author, anon });
        this.props.fetchChats(this.props.currentUser.id);
        this.props.closeChatForm();
      });
    });
  }

  render() {
    const { queryResults, participantNames, body } = this.state;
    const disabled = participantNames && body ? false : true;

    return (
      <div className="chat-create-container">
        <div className="chat-modal-content">
          <h2 className="chat-name">Create A New Chat</h2>
          <form onSubmit={this.handleChatSubmit}>
            <div className="chat-input-box">
              <input
                type="text"
                id="chat-input"
                value={this.state.name}
                placeholder="Add a name to your chat"
                autoComplete="off"
                onChange={this.handleName}
              />
            </div>

            <div className="add-participants">
              <ul>
                <li className="to">To:</li>
                {this.state.participantNames.map(participant => {
                  return (
                    <li className="participants" key={participant.username}>
                      <div className="participant">{participant.username}</div>
                      <div
                        className="remove-participant"
                        onClick={() => this.removeParticipant(participant.id)}
                      >
                        x
                      </div>
                    </li>
                  );
                })}
              </ul>

              <input
                type="text"
                id="chat-input"
                value={this.state.query}
                placeholder="Type the name or username of a person"
                autoComplete="off"
                onChange={this.handleInput}
              />
            </div>

            <ul>
              {queryResults.map(user => {
                return (
                  <li
                    className="user-query"
                    key={user.id}
                    onClick={() => this.handleClickParticipants(user)}
                  >
                    <div>
                      <div>username: {user.username}</div>
                      <div>
                        name: {user.fName} {user.lName}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="chat-input-box">
              <input
                type="text"
                id="chat-input"
                onChange={this.handleMessage}
                placeholder="Type a message"
                autoComplete="off"
                value={this.state.body}
              />
            </div>

            <div className="chat-errors">{this.state.errors}</div>

            <button
              className="chat-create-button"
              type="submit"
              disabled={disabled}
            >
              CREATE CHAT
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ChatCreate;
