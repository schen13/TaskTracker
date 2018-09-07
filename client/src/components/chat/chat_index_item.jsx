import React from "react";

class ChatIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser
    };

    this.renderParticipants = this.renderParticipants.bind(this);
    this.renderTime = this.renderTime.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    const message = this.props.chatData.messages;
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

  renderMessage() {
    let message;
    const chatMessage = this.props.chatData.messages;

    if (chatMessage[chatMessage.length - 1].body) {
      message = chatMessage[chatMessage.length - 1].body;
    } else {
      message = "";
    }
    return <p>{message}</p>;
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
          {this.renderTime()}
        </div>
      </li>
    );
  }
}

export default ChatIndexItem;
