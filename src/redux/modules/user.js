import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { api } from "../../lib/apis";


// ACTION TYPE


const SET_USER = "SET_USER";
const LOG_IN = 'LOG_IN';



// ACTION CREATORS
const setUser = createAction(SET_USER, (user)=>({user}));
const Login = createAction(LOG_IN, (user) => ({user}));

const initialState = {
    user: null,
    is_login: false,
  };


// Middleware

const signupDB = (username, email, password) => {
	return function (dispatch, getState, { history }) {
		api
			.post("/user", {
                username: username,
                email: email,
                password: password,
                
              })
			.then((res) => {
                console.log(res);
				dispatch(setUser({username, email, password }));
                history.push("/");
			})
			.catch((err) => {
                console.log("회원가입을 완료하지 못하였습니다");
				return err;
			})
	}
};


const loginDB = (username, password) => {
	return function (dispatch, getState, { history }) {
		api
			.post('/login', { username: username, password: password })
			.then((res) => {
				// setCookie('token', res.data[1].token, 7);
				// localStorage.setItem('username', res.data[0].username);
				dispatch(Login({ username: username }));
				history.replace('/');
			})
			.catch((err) => {
                console.log(err);
				window.alert('회원정보가 존재하지 않습니다!');
			});
	};
};



// Reducer

export default handleActions({
    [SET_USER]:(state, action) => produce(state, (draft) => {
        // setCookie("is_login", "success")
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
 
    [LOG_IN]: (state, action) =>
			produce(state, (draft) => {
				draft.user = action.payload.user;
				draft.is_login = true;
			}),


},
    initialState

);

const actionCreators = {
    signupDB,
    loginDB,
};

export { actionCreators };