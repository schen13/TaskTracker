import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";

const Root = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>GROUP_APP_NAME</h1>
      </Link>
      <NavBarContainer />
    </header>
    <Route exact path="/login" component={LogInFormContainer} />
    <Route exact path="/signup" component={SignUpFormContainer} />

  </div>
);

export default Root;
