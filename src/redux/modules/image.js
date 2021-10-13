import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import AWS from "aws-sdk";

// aws s3 통신하는 부분
AWS.config.update({
  region: "ap-northeast-2",
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "ap-northeast-2:2e59daac-29aa-41b2-a0fb-b2a25357bf04",
  }),
});

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

//middlwarse
export const uploadImageDB = (image) => {
  return function (dispatch, getState, { history }) {
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: "s3.lost99.com", // 업로드할 대상 버킷명
        Key: image.name, // 업로드할 파일명
        Body: image, // 업로드할 파일 객체
      },
    });

    const promise = upload.promise();

    promise.then((data) => {
      const image_url = data.Location;
      dispatch(uploadImage(image_url));
    });
  };
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
        draft.image_url = action.payload.image_url;
      }),
  },
  initialState
);

const actionCreators = {
  setPreview,
  uploadImageDB,
};

export { actionCreators };
