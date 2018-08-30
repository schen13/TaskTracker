import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import GroupIndexContainer from './group/group_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const Root = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>TaskTracker</h1>
      </Link>
      <NavBarContainer />
    </header>
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    {/* <ProtectedRoute path="/" component={GroupIndexContainer} /> */}
  </div>
);

export default Root;
