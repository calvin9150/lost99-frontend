import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";

const GET_POST = "GET_POST";
const LOADING = "LOADING";

const getPosts = createAction(GET_POST, (postList) => ({
  postList,
}));
const loading = createAction(LOADING, (is_loading) => ({
  is_loading,
}));

const initialState = {
  list: [
    {
      title: "유기곰 주인 찾아요",
      contents:
        "무척 순한 곰돌이가 주인을 찾고있습니다. 연락바랍니다. 사료값 감당이 안돼요..",
      img: "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
      userId: "tang",
    },
    {
      title: "유기곰 주인 찾아요",
      contents:
        "무척 순한 곰돌이가 주인을 찾고있습니다. 연락바랍니다. 사료값 감당이 안돼요..",
      img: "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
      userId: "tang",
    },
    {
      title: "유기곰 주인 찾아요",
      contents:
        "무척 순한 곰돌이가 주인을 찾고있습니다. 연락바랍니다. 사료값 감당이 안돼요..",
      img: "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
      userId: "gom",
    },
    {
      title: "유기곰 주인 찾아요",
      contents:
        "무척 순한 곰돌이가 주인을 찾고있습니다. 연락바랍니다. 사료값 감당이 안돼요..",
      img: "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
      userId: "tang",
    },
    {
      title: "유기곰 주인 찾아요",
      contents:
        "무척 순한 곰돌이가 주인을 찾고있습니다. 연락바랍니다. 사료값 감당이 안돼요..",
      img: "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
      userId: "tang",
    },
    {
      title: "유기곰 주인 찾아요",
      contents:
        "무척 순한 곰돌이가 주인을 찾고있습니다. 연락바랍니다. 사료값 감당이 안돼요..",
      img: "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
      userId: "tang",
    },
    {
      title: "유기곰 주인 찾아요",
      contents:
        "무척 순한 곰돌이가 주인을 찾고있습니다. 연락바랍니다. 사료값 감당이 안돼요..",
      img: "https://smtmap.com/wp-content/uploads/2020/06/%EA%B3%B0-%EA%BF%88.jpg",
      userId: "tang",
    },
  ],
  is_loading: false,
};

const getPostsDB = (start = null, size = null) => {
  return function (dispatch, getState) {
    dispatch(loading(true));
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.postList;
        console.log(draft.list);
      }),
  },
  initialState
);

const actionCreators = {
  getPosts,
  getPostsDB,
};

export { actionCreators };
