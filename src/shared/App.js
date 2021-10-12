import React, { useEffect } from "react";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import { actionCreators as userActions } from "../redux/modules/user";
import "./App.css";
import Main from "../pages/Main";
import Mypage from "../pages/Mypage";
import Post from "../pages/Post";
import Edit from "../pages/Edit";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Detail from "../pages/Detail";

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/mypage" exact component={Mypage} />
        <Route path="/post" exact component={Post} />
        <Route path="/edit/:id" exact component={Edit} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </ConnectedRouter>
    </>
  );
}

export default App;
