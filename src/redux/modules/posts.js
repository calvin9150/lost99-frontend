import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { api } from "../../lib/apis";

const GET_POSTS = "GET_POSTS";
const LOADING = "LOADING";
const DELETE_POST = "DELETE_POST";
const UPDATE_MAP_SELECTED = "UPDATE_MAP_SELECTED";
const ADD_POST = "ADD_POST";

const getPosts = createAction(GET_POSTS, (postList) => ({
  postList,
}));
const loading = createAction(LOADING, (isLoading) => ({
  isLoading,
}));
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));
const updateMapSelected = createAction(UPDATE_MAP_SELECTED, (mapSelected) => ({
  mapSelected,
}));
const addPost = createAction(ADD_POST, (onePost) => ({ onePost }));

const initialState = {
  list: [
    {
      title: "곰을 찾습니다..",
      contents: "집나간 곰 찾아요.. 제보 부탁드립니다 ㅠㅠㅠ",
      imageUrl:
        "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
      username: "tang",
      id: 1,
    },
    // {
    //   title: "유기곰 주인 찾아요",
    //   contents:
    //     "무척 순한 곰돌이가 주인을 찾고있습니다. 무척 순한 곰돌이가 주인을 찾고있습니다.무척 순한 곰돌이가 주인을 찾고있습니다.무척 순한 곰돌이가 주인을 찾고있습니다.무척 순한 곰돌이가 주인을 찾고있습니다.연락바랍니다. 사료값 감당이 안돼요..",
    //   imageUrl:
    //     "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
    //   userId: "tang",
    //   id: 1,
    // },
    // {
    //   title: "유기곰 주인 찾아요",
    //   contents:
    //     "무척 순한 곰돌이가 주인을 찾고있습니다. 연락바랍니다. 사료값 감당이 안돼요..",
    //   imageUrl:
    //     "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
    //   userId: "tang",
    //   id: 2,
    // },
    // {
    //   title: "유기곰 주인 찾아요",
    //   contents:
    //     "무척 순한 곰돌이가 주인을 찾고있습니다. 연락바랍니다. 사료값 감당이 안돼요..",
    //   imageUrl:
    //     "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
    //   userId: "tang",
    //   id: 3,
    // },
    // {
    //   title: "유기곰 주인 찾아요",
    //   contents:
    //     "무척 순한 곰돌이가 주인을 찾고있습니다. 연락바랍니다. 사료값 감당이 안돼요..",
    //   imageUrl:
    //     "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
    //   userId: "tang",
    //   id: 4,
    // },
    // {
    //   title: "유기곰 주인 찾아요5",
    //   contents:
    //     "무척 순한 곰돌이가 주인을 찾고있습니다. 연락바랍니다. 사료값 감당이 안돼요..",
    //   imageUrl:
    //     "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
    //   userId: "tang",
    //   id: 5,
    // },
    // {
    //   title: "유기곰 주인 찾아요6",
    //   contents:
    //     "무척 순한 곰돌이가 주인을 찾고있습니다. 연락바랍니다. 사료값 감당이 안돼요..무척 순한 곰돌이가 주인을 찾고있습니다.무척 순한 곰돌이가 주인을 찾고있습니다.무척 순한 곰돌이가 주인을 찾고있습니다.무척 순한 곰돌이가 주인을 찾고있습니다.",
    //   imageUrl:
    //     "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
    //   userId: "gom",
    //   id: 6,
    // },
    // {
    //   title: "유기곰 주인 찾아요7",
    //   contents:
    //     "무척 순한 곰돌이가 주인을 찾고있습니다. 연락바랍니다. 사료값 감당이 안돼요..",
    //   imageUrl:
    //     "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
    //   userId: "tang",
    //   id: 7,
    // },
  ],
  isLoading: false,
  mapSelected: "전국",
};

const getPostsMiddleware = () => {
  return (dispatch) => {
    dispatch(loading(true));
    api
      .get("/contents")
      .then((res) => {
        const postList = res.data;
        dispatch(getPosts(postList));
      })
      .catch((err) => {
        console.error(err);
        dispatch(loading(false));
      });
  };
};

const deletePostMiddleware = (postId) => (dispatch) => {
  api
    .delete(`/contents/${postId}`)
    .then((res) => dispatch(deletePost(postId)))
    .catch((err) => {
      console.log("게시글 삭제 실패", err);
      dispatch(deletePost(postId));
    });
};

export default handleActions(
  {
    [GET_POSTS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.postList;
        draft.isLoading = false;
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.isLoading = action.payload.isLoading;
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = state.list.filter((v) => v.id !== action.payload.postId);
      }),
    [UPDATE_MAP_SELECTED]: (state, action) =>
      produce(state, (draft) => {
        draft.mapSelected = action.payload.mapSelected;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.onePost);
      }),
  },
  initialState
);

const actionCreators = {
  getPosts,
  addPost,
  getPostsMiddleware,
  deletePostMiddleware,
  updateMapSelected,
};

export { actionCreators };
