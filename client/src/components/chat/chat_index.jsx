import React from 'react';
import { withRouter } from 'react-router-dom';
import ChatIndexItem from './chat_index_item';

class ChatIndex extends React.Component {
  componentDidMount() {
    const userId = this.props.currentUser.id;
    this.props.fetchChats(userId);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.openChatForm();
  }

  render() {
    const { users, currentUser, fetchChat, openChatModal } = this.props;

    return (
      <div className="chat-bar">
        <div className="chat-header">
          <div />
          <h1>Messages</h1>
          <div className="create-chat">
            <i className="far fa-edit" onClick={this.handleClick} />
          </div>
        </div>
        <ul className="conversations">
          {this.props.chats.map(chatData => {
            return (
              <ChatIndexItem
                key={chatData.chat._id}
                chatData={chatData}
                users={users}
                currentUser={currentUser.id}
                fetchChat={fetchChat}
                openChatModal={openChatModal}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(ChatIndex);
