import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import CircularProgress from "@material-ui/core/CircularProgress";

const KakaoRedirect = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    dispatch(userActions.kakaoLogin(code));
  }, [dispatch, code]);

  return <CircularProgress />;
};

export default KakaoRedirect;
