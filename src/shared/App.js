import React, { useEffect } from "react";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/user";
import { getCookie } from "./Cookie";

import { actionCreators as loginAction } from "../redux/modules/user";
import "./App.css";
import Main from "../pages/Main";
import Mypage from "../pages/Mypage";
import Post from "../pages/Post";
import Edit from "../pages/Edit";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Detail from "../pages/Detail";

import Header from "../components/Header";
import KakaoRedirect from "../pages/KakaoRedirect";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginAction.loginCheckDB());
  }, []);

  return (
    <React.Fragment>
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/mypage" exact component={Mypage} />
        <Route path="/post" exact component={Post} />
        <Route path="/edit/:id" exact component={Edit} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route
          path="/api/kakao/callback"
          exact
          component={KakaoRedirect}
        ></Route>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
