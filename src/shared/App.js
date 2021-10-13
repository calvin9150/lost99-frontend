import React, { useEffect } from "react";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";
import { getCookie } from './Cookie';

import { actionCreators} from "../redux/modules/user";
import "./App.css";
import Main from "../pages/Main";
import Mypage from "../pages/Mypage";
import Post from "../pages/Post";
import Edit from "../pages/Edit";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Detail from "../pages/Detail";

import Header from "../components/Header";

function App() {

  const dispatch = useDispatch();


  const token = getCookie("is_login")

    // 토큰이 존재하면 로그인 유지 API 호출 
  React.useEffect(()=>{
  if(token){ 
    dispatch(actionCreators.loginCheckDB());
    }
  }, [])

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
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
