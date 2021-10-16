import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../lib/apis";

//action type
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const UPDATE_COMMENT = "UPDATE_COMMENT";
const GET_COMMENTS = "GET_COMMENTS";

//action creators
const getComments = createAction(GET_COMMENTS, (comment) => comment);
const addComment = createAction(ADD_COMMENT, (id, comment, username) => ({
  id,
  comment,
  username,
}));
const deleteComment = createAction(DELETE_COMMENT, (comment) => ({ comment }));
const updateComment = createAction(UPDATE_COMMENT, (comment) => ({ comment }));

//initial state
const initialState = {
  list: [],
};

//middlewarse

const getCommentsMiddleware = (contentid) => {
  return (dispatch) => {
    api
      .get(`/contents/${contentid}/comments`)
      .then((res) => {
        const commentList = res.data;
        console.log("댓글응답");
        console.log(res.data);
        dispatch(getComments(commentList));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const addCommentMiddleware = (id, comment, username) => {
  return (dispatch, getState, { history }) => {
    api
      .post(`/contents/${id}/comments`, {
        comment: comment,
        username: username,
      })
      .then((res) => {
        dispatch(addComment(id, comment, username));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deleteCommentMiddleware = ({ commentid }) => {
  return (dispatch, getState, { history }) => {
    api
      .delete(`/contents/comment/${commentid}`)
      .then((res) => {
        dispatch(deleteComment());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const updateCommentMiddleware = ({ comment, commentid }) => {
  return (dispatch, getState, { history }) => {
    api
      .put(`/contents/comment/${commentid}`, {
        comment: comment,
      })
      .then((res) => {
        dispatch(updateComment(comment));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//reducer
export default handleActions(
  {
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload);
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        // draft.comment = state.comment.filter((c) => )
      }),
    [UPDATE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comment = action.payload.comment;
      }),
    [GET_COMMENTS]: (state, action) =>
      produce(state, (draft) => {
        console.log("댓글액션페이로드");
        console.log(action.payload);
        draft.list = action.payload;
      }),
  },

  initialState
);

//action creator export
const actionCreators = {
  addComment,
  addCommentMiddleware,
  deleteCommentMiddleware,
  updateCommentMiddleware,
  getCommentsMiddleware,
};

export { actionCreators };
