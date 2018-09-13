import React from "react";
import io from "socket.io-client";

class ChatIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io.connect();

    this.state = {
      currentUser: this.props.currentUser,
      message: []
    };

    this.renderParticipants = this.renderParticipants.bind(this);
    this.renderTime = this.renderTime.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.chatOnEmit = this.chatOnEmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.chatOnEmit();
  }

  componentDidMount() {
    this.socket.emit("fetchMessage", this.props.chatData.chat._id);
  }

  chatOnEmit() {
    this.socket.on("chatMessage", message => {
      this.setState({ message });
    });
  }

  renderMessageData() {
    if (this.props.chatData.messages) {
      this.renderParticipants();
    }
  }

  renderParticipants() {
    let usernames = [];
    const { chat } = this.props.chatData;
    const { users } = this.props;

    if (chat.name) {
      usernames.push(chat.name);
    } else {
      chat.participants.map(user => {
        if (user === this.state.currentUser.id) {
          return usernames;
        } else {
          return usernames.push(users[user].username);
        }
      });
    }
    return <div className="participants">{usernames.join(", ")}</div>;
  }

  renderTime() {
    if (this.state.message) {
      const message = this.state.message;
      const time = message[message.length - 1].timestamp;
      const month = time.slice(5, 7);
      const date = time.slice(8, 10);
      const year = time.slice(2, 4);

      return (
        <p className="date">
          {month}-{date}-{year}
        </p>
      );
    }
    return <p className="date" />;
  }

  renderMessage() {
    if (this.state.message.length > 0) {
      const { message } = this.state;

      return <p>{message[0].body}</p>;
    } else {
      return <p />;
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.closeGroupModal();
    const chatId = this.props.chatData.chat._id;
    this.props.openChatModal(chatId);
  }

  render() {
    return (
      <li className="chats" onClick={this.handleClick}>
        <div className="user-pictures">
          <i id="pf-pic" className="fas fa-user-circle" />
        </div>
        <div className="chat">
          <div className="chat-content">
            {this.renderParticipants()}
            {this.renderMessage()}
          </div>
        </div>
      </li>
    );
  }
}

export default ChatIndexItem;
