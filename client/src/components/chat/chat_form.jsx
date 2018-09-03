import React from "react";
import ChatCreateContainer from "./chat_create_container";
import { connect } from "react-redux";
import { closeChatForm } from "../../actions/modal_actions";

const ChatForm = ({ chatForm, closeChatForm }) => {
  if (!chatForm) return null;
  let component;
  switch (chatForm) {
    case "create":
      component = <ChatCreateContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="chat-form-background" onClick={closeChatForm}>
      <div className="group-form-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  chatForm: state.ui.chatForm
});

const mapDispatchToProps = dispatch => ({
  closeChatForm: () => dispatch(closeChatForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatForm);