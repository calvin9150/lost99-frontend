import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios';
import { deleteCookie, setCookie, getCookie } from '../shared/Cookie';

import { api } from "../../lib/apis";


// ACTION TYPE


const SET_USER = "SET_USER";




// ACTION CREATORS
const setUser = createAction(SET_USER, (user)=>({user}));


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
            console.log(res);
            dispatch(setUser({ 
                username:res.data.username }));
         

            //쿠키에 토큰 저장 
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

// 로그인 유지 API


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


// Reducer

export default handleActions({
    [SET_USER]:(state, action) => produce(state, (draft) => {
        // setCookie("is_login", "success")
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
 

},
    initialState

);

const actionCreators = {
    signupDB,
    loginDB,
    loginCheckDB,
};

export { actionCreators };