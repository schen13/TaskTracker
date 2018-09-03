import React from 'react';
import { Switch } from 'react-router-dom';

import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePageContainer from './home/home_page_container';
import GroupForm from './group/group_form';
import ChatForm from './chat/chat_form';
import SplashPage from './splash/splash_page';

const App = () => (
  <div className="app">
    <GroupForm />
    <ChatForm />

    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>

    <ProtectedRoute exact path="/" component={HomePageContainer} />
  </div>
);

export default App;