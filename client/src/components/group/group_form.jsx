import React from 'react';
import GroupCreateContainer from './group_create_container';
import { connect } from 'react-redux';
import { closeGroupForm } from '../../actions/modal_actions';

const GroupForm = ({ groupForm, closeGroupForm }) => {
  if (!groupForm) return null;
  let component;
  switch (groupForm) {
    case 'create':
      component = <GroupCreateContainer />;
      break;
    // case 'edit':
    //   component = <GroupEditContainer />;
    //   break;
    default:
      return null;
  }
  return (
    <div className="group-form-background" onClick={closeGroupForm}>
      <div className="group-form-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  groupForm: state.ui.groupForm
});

const mapDispatchToProps = dispatch => ({
  closeGroupForm: () => dispatch(closeGroupForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);