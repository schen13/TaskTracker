import React from "react";
import { withRouter } from "react-router-dom";
import ChatShowDetail from "./chat_show_detail";
// import io from "socket.io-client";

class ChatShow extends React.Component {
  constructor(props) {
    super(props);
    // this.socket = io.connect();

    this.state = {
      chatId: null,
      body: "",
      author: this.props.currentUser.id,
      users: [],
      anon: false,
      messages: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
    this.handleAnon = this.handleAnon.bind(this);
    this.renderMessages = this.renderMessages.bind(this);
    // this.chatOnEmit = this.chatOnEmit.bind(this);
    // this.chatOnEmit();
  }

  componentDidUpdate() {
    if (this.state.chatId !== this.props.chat.chat._id) {
      const { chat, messages } = this.props.chat;
      const { users, currentUser } = this.props;

      // For ChatShowDetail participants
      let chatParticipants = [];
      chat.participants.map(userId => {
        if (userId === currentUser.id) return chatParticipants;
        let user = users.filter(user => user.id === userId);
        return chatParticipants.push(user[0]) 
      });

      this.props.fetchMessages(chat._id)
        .then(this.setState({
          chatId: chat._id,
          messages: messages,
          users: chatParticipants
        })
      )
    }
  }

  componentDidMount() {
    this.props
      .fetchMessages(this.props.chat.chat._id)
      .then(this.setState({ messages: this.props.chat.messages }));
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmitMessage(e) {
    e.preventDefault();
    const { chatId, body, author, anon } = this.state;

    // Send chat to database
    this.props.replyToChat({ chatId, body, author, anon }).then(
      this.props.fetchChats(author),
      // this.props.fetchMessage(chatId)
      this.setState({
        messages: [
          ...this.state.messages,
          { _id: "temporaryId", chatId, body, author, anon }
        ],
        body: ""
      })
    );

    // Send chat to everyone in message
    // this.socket.emit("newMessage", { body, author, anon });
    return false;
  }

  handleAnon(e) {
    e.preventDefault();
    this.setState(prevState => ({
      anon: !prevState.anon
    }));
  }

  // chatOnEmit() {
  //   this.scrollToBottom();
  //   this.socket.on("newMessage", message => {
  //     this.setState({
  //       messages: [...this.state.messages, message]
  //     });
  //     this.scrollToBottom();
  //   });
  // }

  scrollToBottom() {
    let chatScroll = document.getElementById("chat-show");
    if (chatScroll) {
      let chatHeight = chatScroll.scrollHeight;
      chatScroll.scrollTop = chatHeight;
    }
  }

  renderMessages() {
    const { users } = this.props;
    const { messages } = this.state;
    if (!messages) return;

    let conversation = [];
    let authorName;
    let prevId = "";
    for (let i = messages.length - 1; i >= 0; i--) {
      let author = users.filter(user => user.id === messages[i].author);
      authorName = author[0].username;

      if (messages[i].author === this.props.currentUser.id) {
        // message sent by current user
        conversation.unshift(
          <li className="own-message" key={messages[i]._id}>
            <div className="message">
              <span>{messages[i].body}</span>
            </div>
          </li>
        );
        prevId = "";
      } else if (messages[i].anon) {
        // message sent anonymously so username is set to anon
        conversation.unshift(
          <li className="other-message" key={messages[i]._id}>
            <div>
              <i id="pf" className="fas fa-question-circle" />
            </div>
            <div className="message-box">
              <div className="message">
                <span>{messages[i].body}</span>
              </div>
              <div className="author">Anonymous</div>
            </div>
          </li>
        );
        prevId = "";
      } else if (messages[i].author === prevId) {
        // messages sent by previous message sender so username and picture arent shown again
        conversation.unshift(
          <li className="other-message" key={messages[i]._id}>
            <div className="message-box" id="pf-placeholder">
              <div className="message">
                <span>{messages[i].body}</span>
              </div>
            </div>
          </li>
        );
      } else {
        conversation.unshift(
          <li className="other-message" key={messages[i]._id}>
            <div>
              <i id="pf" className="fas fa-user-circle" />
            </div>
            <div className="message-box">
              <div className="message">
                <span>{messages[i].body}</span>
              </div>
              <div className="author">{authorName}</div>
            </div>
          </li>
        );
        prevId = messages[i].author;
      }
    }

    return conversation;
  }

  render() {
    const {chat, closeChatModal} = this.props;
    // toggle for an anon message
    let anonymous = this.state.anon ? (
      <i id="anon" className="far fa-eye-slash" />
    ) : (
      <i id="non-anon" className="far fa-eye" />
    );

    return (
      <div>
        <div className="chat-show" id="chat-show">
          <ChatShowDetail 
            chatName={chat.chat.name}
            closeChatModal={closeChatModal}
            users={this.state.users}
          />
          <h1 className="chat-name">{}</h1>
          <ul className="chat-show-messages">{this.renderMessages()}</ul>
        </div>

        <form onSubmit={this.handleSubmitMessage} className="chat-input">
          <input
            type="text"
            autoComplete="off"
            id="message-input-body"
            onChange={this.handleInput}
            placeholder="Type a message"
            value={this.state.body}
          />
        </form>

        <div className="chat-button-holder">
          <div className="anon" onClick={this.handleAnon}>
            {anonymous}
          </div>
          <div className="icon-message">
            <span id="anon-message">Click to make this message anonymous</span>
          </div>
          <div className="send-message" onClick={this.handleSubmitMessage}>
            SEND
          </div>
          <div className="icon-message">
            <span id="send-message">Press Enter to send</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ChatShow);
