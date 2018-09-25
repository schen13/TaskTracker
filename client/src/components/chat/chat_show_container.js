import { connect } from "react-redux";
import { deleteChat, fetchChats } from "../../actions/chat_actions";
import { fetchMessages, replyToChat } from "../../actions/message_actions";
import { closeChatModal } from "../../actions/modal_actions";
import { selectChat } from "../../reducers/selectors";
import ChatShow from "./chat_show";

const mapStateToProps = ({ entities, session }, ownProps) => ({
  chat: selectChat(entities, ownProps.chatId),
  users: Object.values(entities.users),
  currentUser: session,
  messages: Object.values(entities.messages)
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: chatId => dispatch(fetchMessages(chatId)),
  fetchChats: (userId) => dispatch(fetchChats(userId)),
  replyToChat: chat => dispatch(replyToChat(chat)),
  deleteChat: chatId => dispatch(deleteChat(chatId)),
  closeChatModal: () => dispatch(closeChatModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatShow);
