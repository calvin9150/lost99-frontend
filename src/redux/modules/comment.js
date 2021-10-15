import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../lib/apis";

//action type
const ADD_COMMENT = "ADD_COMMENT";
// const DELETE_COMMENT = "DELETE_COMMENT";
// const UPDATE_COMMENT = "UPDATE_COMMENT";

//action creators
const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
// const deleteComment = createAction(DELETE_COMMENT, (comment) => ({ comment }));
// const updateComment = createAction(UPDATE_COMMENT, (comment) => ({ comment }));

//initial state
const initialState = {
  comment: "dddd",
  username: "ddd123",
};

//middlewarse





//reducer
export default handleActions(
  {
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comment = action.payload.comment;
      }),
    // [DELETE_COMMENT]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.comment = action.payload.comment;
    //   }),
    // [UPDATE_COMMENT]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.comment = action.payload.comment;
    //   }),
  },

  initialState
);

//action creator export
const actionCreators = {
  addComment,
};

export { actionCreators };
