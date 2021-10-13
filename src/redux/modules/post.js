import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../lib/apis";

//action type
const ADD_POST = "ADD_POST";
const SET_POST = "SET_POST";
//actionCreator
const addPost = createAction(ADD_POST, (post) => ({ post }));
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
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

// const getOnePostsMiddleware = () => {
//   return (dispatch, getState, { history }) => {
//     api
//       .get("/contents")
//       .then((res) => {
//         const post_list = res.data;
//         console.log(post_list, "서버에 저장된 데이터")
//         const _data = getState().posts.list
//         console.log(_data, "ㅔㅐ")
//         const _post_list = _data.push(post_list)
//         console.log(_post_list)
//         // dispatch(setPost(post_list));
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };
// };

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
  },

  initialState
);

// action creator export
const actionCreators = {
  addPost,
  
  // getOnePostsMiddleware,
};

export { actionCreators };
