import React from 'react';
import { connect } from 'react-redux';
import GroupDetailContainer from '../group/group_detail_container';

const mapStateToProps = state => ({
  groupModal: state.ui.groupModal
});

const mapDispatchToProps = dispatch => ({
});

const GroupModal = ({ groupModal }) => {
  if (!groupModal) return null;
  const groupModalClass = groupModal ? "group-modal-background group-open" : "group-modal-background group-closed";
  return (
    <div className={groupModalClass}>
      <GroupDetailContainer
        groupId={groupModal}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupModal);