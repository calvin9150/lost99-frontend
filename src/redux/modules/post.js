import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../lib/apis";

//action type
const ADD_POST = "ADD_POST";
const SET_POST = "SET_POST";
const UPDATE_POST = "UPDATE_POST";
//actionCreator
const addPost = createAction(ADD_POST, (post) => ({ post }));
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const updatePost = createAction(UPDATE_POST, (post) => ({ post }));
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

// const getOnePostsMiddleware = (id) => {
//   return (dispatch, getState, { history }) => {
//     api
//       .get(`/contents/${id}`)
//       .then((res) => {
//         const onePost = res.data;
//         dispatch(addPost(onePost));
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };
// };

const updatePostMiddleware = (
  id,
  title,
  phonenumber,
  contents,
  location,
  imgurl
) => {
  return (dispatch, getState, { history }) => {
    api
      .put(`/contents/${id}`, {
        title: title,
        phonenumber: phonenumber,
        contents: contents,
        location: location,
        imgurl: imgurl,
      })
      .then((res) => {
        console.log(res);
        dispatch(updatePost(title, phonenumber, contents, location, imgurl));
        history.replace("/")
      })
      .catch((err) => {
        console.log(err);
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
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [UPDATE_POST]: (state, action) =>
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
  // getOnePostsMiddleware,
  updatePostMiddleware,
};

export { actionCreators };
