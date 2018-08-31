import React from 'react';
import { connect } from 'react-redux';
import GroupDetailContainer from '../group/group_detail_container';
import { closeGroupModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  groupModal: state.ui.groupModal
});

const mapDispatchToProps = dispatch => ({
  closeGroupModal: () => dispatch(closeGroupModal())
});

const GroupModal = ({ groupModal, closeGroupModal }) => {
  if (!groupModal) return null;
  return (
    <div className="group-modal-background">
      <div className="group-modal-child">
        <GroupDetailContainer closeGroupModal={closeGroupModal} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupModal);