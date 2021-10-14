import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";
//material
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Upload = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fileInput = React.useRef();

  //input file 타겟잡기
  const selectFile = (e) => {
    // console.log(e.target.files[0]);
    // console.log(fileInput.current.files[0]);

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.readAsDataURL(file);
    //파일 선택이 완료 되었을때 리덕스에 이미지 url 저장
    reader.onloadend = () => {
      const preview = reader.result;
      dispatch(imageActions.setPreview(preview));
    };
  };
  const uploadDB = () => {
    let image = fileInput.current.files[0];
    // console.log(image)
    dispatch(imageActions.uploadImageDB(image));
  };

  return (
    <React.Fragment>
      <input type="file" ref={fileInput} onChange={selectFile} />

      <Button
        variant="contained"
        size="small"
        color="primary"
        className={classes.margin}
        onClick={uploadDB}
        style={{
          margin: "7px 0px 0px 0px",
        }}
      >
        사진 업로드
      </Button>
    </React.Fragment>
  );
};

export default Upload;
