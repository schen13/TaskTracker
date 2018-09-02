import React from "react";
import { connect } from "react-redux";
import { closeChatModal } from "../../actions/modal_actions";
import ChatShowContainer from '../chat/chat_show_container';

const mapStateToProps = state => ({
  chatModal: state.ui.chatModal
});

const mapDispatchToProps = dispatch => ({
  closeChatModal: () => dispatch(closeChatModal())
});

const ChatModal = ({ chatModal, closeChatModal }) => {
  if (!chatModal) return null;
  return (
    <div className="group-modal-background">
      <div className="group-modal-child">
        <ChatShowContainer closeChatModal={closeChatModal} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatModal);
