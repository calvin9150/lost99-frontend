import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

//action type
const ADD_POST = "ADD_POST";

//actionCreator
const addPost = createAction(ADD_POST, (post) => ({ post }));

//initialState
const initialState = {
  list: [],
};

//middlewarse
const addPostDB = (post) => {
  return (dispatch, getState, { history }) => {
    apis.createPost(post).then((res) => {
      console.log(res);
      dispatch(addPost(post))
      history.push("/")
    });
  };
};

// reducer
export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  addPost,
  addPostDB,
};

export { actionCreators };
