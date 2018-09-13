import { connect } from "react-redux";
import GroupCreate from "./group_create";
import { createGroup } from "../../actions/group_actions";
import { createChat } from "../../actions/chat_actions";
import { selectUsernamesFromUsers } from "../../reducers/selectors";
import { closeGroupForm } from "../../actions/modal_actions";

const mapStateToProps = ({ entities: { users }, usernameMapping }) => ({
  usernames: selectUsernamesFromUsers(users),
  usernameMapping
});

const mapDispatchToProps = dispatch => ({
  createGroup: group => dispatch(createGroup(group)),
  closeGroupForm: () => dispatch(closeGroupForm()),
  createChat: chat => dispatch(createChat(chat))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupCreate);
