import React from 'react';
import { Route } from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ChatShowContainer from './chat/chat_show_container';
import HomePageContainer from './home/home_page_container';
import GroupModal from './modal/group_modal';

const App = () => (
  <div>
    <GroupModal />
    <header>
    </header>
    <ProtectedRoute path="/" component={NavBarContainer} />
    <AuthRoute exact path='/login' component={LogInFormContainer} />
    <AuthRoute exact path='/signup' component={SignUpFormContainer} />
    <Route exact path='/chats/:chatId' component={ChatShowContainer} />
    <ProtectedRoute exact path="/" component={HomePageContainer} />
  </div>
);

export default App;