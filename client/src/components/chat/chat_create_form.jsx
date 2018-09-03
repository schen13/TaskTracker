import React from 'react';
import io from "socket.io-client";

class ChatCreate extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io.connect();

    this.state = {
      participantNames: [],
      groupUsers: this.props.users,
      query: '',
      queryResults: [],
      //Chat Params
      name: '',
      participants: [this.props.currentUser.id],
      //Message Params
      chatId: '',
      body: '',
      author: this.props.currentUser.id,
      anon: false
    };

    this.handleName = this.handleName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleClickParticipants = this.handleClickParticipants.bind(this);
    this.removeParticipant = this.removeParticipant.bind(this)
    this.filterUsers = this.filterUsers.bind(this);
    this.emitChatSubmit = this.emitChatSubmit.bind(this);
  }

  handleName(e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
  }

  handleInput(e) {
    e.preventDefault();
    const userQuery = e.currentTarget.value;
    this.setState({ query: userQuery }, () => {
      this.filterUsers(userQuery);
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
        if ((user.username && user.username.toLowerCase().search(userQuery.toLowerCase()) !== -1) ||
            (user.fName && user.fName.toLowerCase().search(userQuery.toLowerCase()) !== -1) ||
            (user.lName && user.fName.toLowerCase().search(userQuery.toLowerCase()) !== -1)) {
          return searchQuery.push(user);
        }
      }
      return searchQuery;
    });
    this.setState({ queryResults: searchQuery });
  }

  handleClickParticipants(user) {
    let participant = {username: user.username, id: user.id};
    if (!participant.username) participant.username = `${user.fName} ${user.lName}`;
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
      participantNames: this.state.participantNames.filter(user => user.id !== userId)
    });
  }

  emitChatSubmit(e) {
    e.preventDefault();
    const { name, participants } = this.state;
    this.socket.emit("newChat", { name, participants });
    this.socket.on("newChatCreated", chatId => {
      this.setState({ chatId }, () => {
        const { chatId, body, author, anon } = this.state;
        this.props.replyToChat({ chatId, body, author, anon }, () => this.props.fetchChats(this.props.currentUser.id));
        this.props.closeChatForm();
      });
    });
  }

  render() {
    const { queryResults, participantNames, body } = this.state;
    const disabled = (participantNames && body) ? false : true;

    return (
      <div className="chat-create-container">
        <div className="chat-modal-content">
          <h2 className="chat-name">Create A New Message</h2>
          <form onSubmit={this.emitChatSubmit}>
            <input 
              type="text"
              value={this.state.name}
              placeholder="Add a name to your chat"
              onChange={this.handleName} />

            <div>
              <ul>
                <li>To: </li>
                {this.state.participantNames.map(participant => {
                  return(
                    <li key={participant.username}>
                      {participant.username}
                      <div onClick={() => this.removeParticipant(participant.id)}>x</div>
                    </li>
                  );
                })}
              </ul>

              <input
                type="text"
                value={this.state.query}
                placeholder="Type the name or username of a person"
                onChange={this.handleInput} />
            </div>

            <ul>
              {queryResults.map(user => {
                return (
                  <li key={user.id} onClick={() => this.handleClickParticipants(user)}>
                    <div>{user.username}</div>
                    <div>{user.fName} {user.lName}</div>
                  </li>
                );
              })}
            </ul>

            <input
              type="text"
              onChange={this.handleMessage}
              placeholder="Type a message"
              value={this.state.body} />

            <button 
              className="chat-create-button"
              type="submit"
              disabled={disabled}    
              >Create Chat</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ChatCreate;