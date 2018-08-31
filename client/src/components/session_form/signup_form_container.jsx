import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Signup',
    navLink: <Link to="/login"><div className="other-session-link">Login Instead</div></Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(removeSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);