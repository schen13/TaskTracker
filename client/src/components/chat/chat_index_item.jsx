import React from 'react';

class ChatIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.renderParticipants = this.renderParticipants.bind(this);
    this.renderTime = this.renderTime.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  renderParticipants() {
    let usernames = [];
    const { participants } = this.props.chatData.chat;

    participants.map(user => {
      let username;
      if (user !== this.props.currentUser)
        username = this.props.users[user].username;
      return usernames.push(username);
    });

    return <div className="participants">{usernames.join(", ")}</div>;
  }

  renderTime() {
    const time = this.props.chatData.message[0].timestamp;
    const month = time.slice(5, 8);
    const year = time.slice(0, 4);

    return (
      <p className="date">
        {month}{year}
      </p>
    );
  }

  handleClick(e) {
    e.preventDefault();
    const chatId = this.props.chatData.chat._id;
    this.props.openChatModal(chatId);
  }

  render() {
    const { chatData } = this.props;
    const message = chatData.message[0];

    return (
      <li className="chats" onClick={this.handleClick}>
        <div className="user-pictures">
          <i id="pf-pic" className="fas fa-user-circle"></i>
        </div>
        <div className="chat">
          <div className="chat-content">
            {this.renderParticipants()}
            <p>{message.body}</p>
          </div>
          {this.renderTime()}
        </div>
      </li>
    );
  }
}

export default ChatIndexItem;