import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

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

// Reducer

export default handleActions({
    [SET_USER]:(state, action) => produce(state, (draft) => {
        // setCookie("is_login", "success")
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    // [LOG_OUT]:(state, action) => produce(state, (draft) => {
    //     deleteCookie("is_login");
    //     draft.user = null;
    //     draft.is_login = false;
    // }),
    // [GET_USER]:(state, action) => produce(state, () => {}),

},
    initialState

);

const actionCreators = {
    signupDB,
};

export { actionCreators };