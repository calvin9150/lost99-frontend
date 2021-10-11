import React from "react";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";


//사진업로드 input element
const Upload = (props) => {
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

  return (
    <React.Fragment>
      <input type="file" ref={fileInput} onChange={selectFile} />
    </React.Fragment>
  );
};

export default Upload;
