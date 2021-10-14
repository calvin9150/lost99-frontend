import React from "react";
import { Button, ButtonGroup, Grid, Toolbar, Typography, AppBar } from "@material-ui/core";



import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from 'react-redux';

import {getCookie} from "../shared/Cookie"


const Header = (props) =>{

  const dispatch = useDispatch();
	// const is_token = document.cookie;

  const [is_login, setIsLogin] = React.useState(false);

  React.useEffect(() => {

      // 쿠키를 가져오기
      let cookie = getCookie("is_login");
      // 쿠키 존재여부 확인 
      console.log(cookie);
      // 쿠키가 있으면?
      if(cookie){
          setIsLogin(true);
      }else{
          setIsLogin(false);
      }
  });

	if (is_login) {
		return (
      <Toolbar padding = "16px">

      {/* <Typography style={{ flex: 1 }} noWrap sx={{ flexGrow: 1 }} variant="h6" color="inherit">
        Lost and Found 99
      </Typography> */}

      <ButtonGroup  href="#" variant="outlined"   size="small" variant="contained" aria-label="outlined primary button group" >
          <Button
            onClick={() => {
              history.push('/post');
            }}
          >글쓰기</Button>

          <Button
          onClick={() => {
            dispatch(userActions.logoutDB());
          }}
          >로그아웃</Button>
      </ButtonGroup>


    </Toolbar>

		);
	}
    return(

        <Toolbar padding = "16px">

        <Typography style={{ flex: 1 }} noWrap sx={{ flexGrow: 1 }} variant="h6" color="inherit">
          Lost and Found 99
        </Typography>

        <ButtonGroup  href="#" variant="outlined"   size="small" variant="contained" aria-label="outlined primary button group" >
            <Button
            onClick={() => {
              history.push('/login');
            }}
            > 로그인 </Button>

            <Button
            onClick={() => {
              history.push('/signup');
            }}
            
            >회원가입</Button>
        </ButtonGroup>

      </Toolbar>

         

    )
}



export default Header;