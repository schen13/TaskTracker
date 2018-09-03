import React from 'react';

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
    const { participants } = this.props.chatData.chat;
    const { users } = this.props;

    participants.map(user => {
      let username;
      if (user === this.state.currentUser) return usernames;

      if (users[user].username) {
        username = users[user].username;
      } else if (users[user].fName) {
        username = `${users[user].fName} ${users[user].lName}`;
      } else {
        username = 'No Name'
      }
      return usernames.push(username);
    });

    return <div className="participants">{usernames.join(", ")}</div>;
  }

  renderTime() {
    const time = this.props.chatData.message[0].timestamp;
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
    if (this.props.chatData.message[0].body) {
      message = this.props.chatData.message[0].body;
    } else {
      message = ''
    }
    return (
      <p>{message}</p>
    )
  }

  handleClick(e) {
    e.preventDefault();
    const chatId = this.props.chatData.chat._id;
    this.props.openChatModal(chatId);
  }

  render() {
    return (
      <li className="chats" onClick={this.handleClick}>
        <div className="user-pictures">
          <i id="pf-pic" className="fas fa-user-circle"></i>
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