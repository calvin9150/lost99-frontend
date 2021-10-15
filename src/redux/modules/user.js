import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios';
import { deleteCookie, setCookie, getCookie } from "../../shared/Cookie";

import { api } from "../../lib/apis";


// ACTION TYPE


const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";


// ACTION CREATORS
const setUser = createAction(SET_USER, (user)=>({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));



const initialState = {
    user: null,
    is_login: false,
  };


// Middleware

const signupDB = (username, email, password, passwordCheck) => {
	return function (dispatch, getState, { history }) {
		api
			.post("/signup", {

                username: username,
                email: email,
                password: password,
                passwordCheck: passwordCheck

              })
			.then((res) => {
                console.log(res);
				dispatch(setUser({username, email, password }));
                window.alert("회원가입을 완료하였습니다");
                history.push("/login");
			})
			.catch(
        
        (err) => {
                window.alert("회원가입을 완료하지 못하였습니다")
                console.log(err);
				return err;
			})
	}
};


const loginDB = (username, password) => {
    
	return function (dispatch, getState, { history }) {
		api
			.post("/login", { 
        username: username, 
        password: password })
            
			.then((res) => {
            console.log(res.data);
            console.log(res);
            dispatch(setUser({ 
              username:username }));

              console.log(res.data.username);
              localStorage.setItem('username', res.data.username);
            
            // 쿠키에 토큰 저장 
            console.log(res.data.token);
            setCookie('token', res.data.token, 7);

            window.location.href = "/";
			})
			.catch(
        function (error) {
          if (error.response) {
            // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
            window.alert('회원정보가 존재하지 않습니다!');

            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

          }
          else if (error.request) {
            // 요청이 이루어 졌으나 응답을 받지 못했습니다.
            // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
            // Node.js의 http.ClientRequest 인스턴스입니다.
            console.log(error.request);
          }
          else {
            // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
            console.log('Error', error.message);
          }
          console.log(error.config);
        }
      );
	};
};


const loginCheckDB = () => {

	return function (dispatch, getState, { history }) {
    const username = localStorage.getItem('username');
		const tokenCheck = getCookie("token");

		if (tokenCheck) {
			dispatch(setUser({ username: username }));
		} else {
			dispatch(logOut());
		}

	};
};


const logoutDB = () => {
    return function (dispatch, getState, { history }) {
      dispatch(logOut());
      window.location.href = "/";
      // history.replace("/");
    };
  };


// Reducer

export default handleActions({

    [SET_USER]:(state, action) => produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
    }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("token");
        draft.user = null;
        draft.is_login = false;
      }),

},
    initialState

);

const actionCreators = {
    signupDB,
    loginDB,
    loginCheckDB,
    logoutDB,
};

export { actionCreators };