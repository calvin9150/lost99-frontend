import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//action type
const SET_PREVIEW = "SET_PREVIEW";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";

//action creators
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));

//initial state
const initialState = {
  preview: null,
  image_url: "",
};

//reducer
export default handleActions(
  {
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
      [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
  },
  initialState
);

const actionCreators = {
  setPreview,
};

export { actionCreators };
