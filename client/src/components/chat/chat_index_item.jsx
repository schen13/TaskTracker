import React from 'react';
import { Link } from 'react-router-dom';

class ChatIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {}
    };

    this.renderParticipants = this.renderParticipants.bind(this);
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

  render() {
    const { chatData } = this.props;
    const message = chatData.message[0];

    return (
      <Link to={`/chats/${chatData.chat._id}`}>
        <li className="chats">
          <div className="user-pictures" />
          <div className="chat">
            <div className="chat-content">
              {this.renderParticipants()}
              <p>{message.body}</p>
            </div>
            <p className="date">{message.timestamp}</p>
          </div>
        </li>
      </Link>
    );
  }
}

export default ChatIndexItem;