import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ChatShowContainer from './chat/chat_show_container';
import HomePageContainer from './home/home_page_container';
import GroupForm from './group/group_form';
import SplashPage from './splash/splash_page';

const App = () => (
  <div className="app">
    <GroupForm />
    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>

    <Route exact path="/chats/:chatId" component={ChatShowContainer} />
    <ProtectedRoute exact path="/" component={HomePageContainer} />
    <ProtectedRoute exact path="/chats/:chatId" component={ChatShowContainer} />
  </div>
);

export default App;