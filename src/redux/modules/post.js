import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../lib/apis";

//action type
const ADD_POST = "ADD_POST";

//actionCreator
const addPost = createAction(ADD_POST, (post) => ({ post }));

//initialState
const initialState = {
  list: [],
};

//middlewarse
const addPostsMiddleware = (title, phonenumber, contents, location, imgurl) => {
  return (dispatch, getState, { history }) => {
    api.post("/contents", {
      title: title,
      phonenumber: phonenumber,
      contents: contents,
      location: location,
      imgurl: imgurl,
    });
    dispatch(addPost({ title, phonenumber, contents, location, imgurl }));
    history.push("/");
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
  addPostsMiddleware,
};

export { actionCreators };
