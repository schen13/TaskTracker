import React from "react";
import { withRouter } from "react-router-dom";
import io from "socket.io-client";

class ChatShow extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io.connect();
    const { users, currentUser } = this.props;

    this.state = {
      chatId: null,
      body: "",
      author: currentUser.id,
      participants: [],
      anon: false,
      messages: [],
      users: users,
      newMessage: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
    this.handleAnon = this.handleAnon.bind(this);
    this.chatOnEmit = this.chatOnEmit.bind(this);
    this.renderMessages = this.renderMessages.bind(this);
    this.chatOnEmit();
  }

  componentDidUpdate() {
    if (this.state.chatId !== this.props.chat.chat._id) {
      this.setState({
        chatId: this.props.chat.chat._id,
        participants: this.props.chat.chat.participants,
        messages: this.props.chat.messages
      });
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
    this.socket.emit("newMessage", { chatId, body, author, anon });

    // Send chat to everyone in message
    this.setState({ body: "" });
    return false;
  }

  handleAnon(e) {
    e.preventDefault();
    this.setState(prevState => ({
      anon: !prevState.anon
    }));
  }

  chatOnEmit() {
    this.socket.on("chatMessages", messages => {
      this.setState({ messages });
    });
  }

  renderMessages() {
    let { users, messages } = this.state;
    if (!messages) return;

    let conversation = [];
    let authorName;
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].author !== this.props.currentUser.id) {
        let author = users.filter(user => user.id === messages[i].author);
        authorName = author[0].username;

        // Anonymous message
        if (messages[i].anon) {
          authorName = "anonymous";
        }
        conversation.push(
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
      } else {
        conversation.push(
          <li className="own-message" key={messages[i]._id}>
            <div className="message">
              <span>{messages[i].body}</span>
            </div>
          </li>
        );
      }
    }
    return conversation;
  }

  render() {
    let anonymous = this.state.anon ? (
      <i id="anon" className="far fa-eye-slash" />
    ) : (
      <i id="non-anon" className="far fa-eye" />
    );

    return (
      <div>
        <div className="chat-show">
          <h1 className="chat-name">{this.props.chat.chat.name}</h1>
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
