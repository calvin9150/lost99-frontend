import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//action type
const ADD_POST = "ADD_POST";

//actionCreator
const addPost = createAction(ADD_POST, (post) => ({ post }));

//initialState
const initialState = {
  list: [],
};

//middlewarse

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
};

export { actionCreators };
