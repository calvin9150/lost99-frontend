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
const logOut = createAction(LOG_OUT, (user) => ({ user }));



const initialState = {
    user: null,
    is_login: false,
  };


// Middleware

const signupDB = (username, email, password, passwordCheck) => {
	return function (dispatch, getState, { history }) {
		api
			.post("/user", {
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
			.catch((err) => {
                window.alert("회원가입을 완료하지 못하였습니다")
                console.log(err);
				return err;
			})
	}
};


const loginDB = (username, password) => {

    
	return function (dispatch, getState, { history }) {
		api
			.post('/login', { username: username, password: password })
            
			.then((res) => {
            console.log(res);
            dispatch(setUser({ 
                username:res.data.username }));
         
            // 쿠키에 토큰 저장 
            const { accessToken } = res.data.token;
            setCookie("is_login", `${accessToken}`);

            history.replace('/');    

			})
			.catch((err) => {
                console.log(err);
				window.alert('회원정보가 존재하지 않습니다!');
			});
	};
};



const loginCheckDB = () => {

	return function (dispatch, getState, { history }) {

        const token = getCookie("is_login");
        console.log(token);

		api
			.post('/login', { 
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
             })
            
			.then((res) => {
                console.log(res.data);
                dispatch(setUser({ 
                    username: res.data.username
                    })
                    );
                })
			.catch((err) => {
                console.log(err);
			});
	};
};



const logoutDB = () => {
    return function (dispatch, getState, { history }) {
      dispatch(logOut());
      window.location.href = "/";
    //   history.replace("/");
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
        deleteCookie("is_login");
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