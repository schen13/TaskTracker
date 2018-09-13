import React from "react";
import { withRouter } from "react-router-dom";
import ChatIndexItem from "./chat_index_item";

class ChatIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupChats: [],
      privateChats: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderChats = this.renderChats.bind(this);
  }

  componentDidUpdate() {
    if (
      this.state.groupChats.length + this.state.privateChats.length !==
      this.props.chats.length
    ) {
      this.renderChats();
    }
  }

  componentDidMount() {
    const userId = this.props.currentUser.id;
    this.props.fetchChats(userId);
    this.renderChats();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.openChatForm();
  }

  renderChats() {
    let gChats = [];
    let pChats = [];
    this.props.chats.map(chatData => {
      if (chatData.chat.groupChat) {
        return gChats.push(chatData);
      }
      return pChats.push(chatData);
    });

    this.setState({ groupChats: gChats, privateChats: pChats });
  }

  render() {
    const {
      users,
      currentUser,
      fetchChat,
      openChatModal,
      closeGroupModal
    } = this.props;

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
          <li className="chat-type">Group Chats</li>
          {this.state.groupChats.map(chatData => {
            return (
              <ChatIndexItem
                key={chatData.chat._id}
                chatData={chatData}
                users={users}
                currentUser={currentUser.id}
                fetchChat={fetchChat}
                openChatModal={openChatModal}
                closeGroupModal={closeGroupModal}
              />
            );
          })}
          <li className="chat-type">Private Chats</li>
          {this.state.privateChats.map(chatData => {
            return (
              <ChatIndexItem
                key={chatData.chat._id}
                chatData={chatData}
                users={users}
                currentUser={currentUser.id}
                fetchChat={fetchChat}
                openChatModal={openChatModal}
                closeGroupModal={closeGroupModal}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(ChatIndex);
