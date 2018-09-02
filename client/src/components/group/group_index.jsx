import React from 'react';
import GroupIndexItem from './group_index_item';
import { selectUserGroups } from '../../reducers/selectors';
import GroupCreateContainer from './group_create_container';

class GroupIndex extends React.Component {


  componentDidMount() {
    this.props.fetchAllGroups();
    this.props.fetchAllUsers();
  }

  render() {
    const { user, groups, openGroupModal } = this.props;
    const userGroups = selectUserGroups(user, groups);
    console.log(user, userGroups);
    if (!userGroups) return null;
    return (
      <div className="group-index-container">
        <ul className="group-index">
          Your Groups
          {userGroups.map(group => (
            <GroupIndexItem
              key={group._id}
              group={group}
              openGroupModal={openGroupModal}
            />
          ))}
        </ul>
        <a className="btn-floating btn waves-effect waves-light red modal-trigger" href="#modal2"><i className="fas fa-plus"></i></a>
        {/* <div id="modal2" className="modal"> */}
        {/* <div className="modal-content"> */}
        <GroupCreateContainer />
        {/* </div>
        </div> */}
      </div >
    );
  }
}

export default GroupIndex;