import React from "react";
import { connect } from "react-redux";
import ChatShowContainer from '../chat/chat_show_container';

const mapStateToProps = state => ({
  chatModal: state.ui.chatModal
});

const mapDispatchToProps = dispatch => ({
});

const ChatModal = ({ chatModal }) => {
  if (!chatModal) return null;
  return (
    <div className="chat-modal-background">
      <div className="chat-modal-child">
        <ChatShowContainer 
          chatId={chatModal} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatModal);
