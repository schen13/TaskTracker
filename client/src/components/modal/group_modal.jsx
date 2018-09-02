import React from 'react';
import { connect } from 'react-redux';
// import GroupDetailContainer from '../group/group_detail_container';
import { closeGroupModal } from '../../actions/modal_actions';
import GroupDetailContainer from '../group/group_detail_container';

const mapStateToProps = state => ({
  groupModal: state.ui.groupModal
});

const mapDispatchToProps = dispatch => ({
});

const GroupModal = ({ groupModal }) => {
  if (!groupModal) return null;
  return (
    <div className="group-modal-background">
      <GroupDetailContainer
        groupId={groupModal}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupModal);