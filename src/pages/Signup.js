import React from "react";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {useDispatch} from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { emailCheck } from "../shared/Common";


const Signup = (props) => {

  const theme = createTheme();
  const dispatch = useDispatch();

   // signupDB에 인자로 들어갈 입력된 username, pwd, pwdcheck 가져오기 

   const [username, setUserName] = React.useState('');
   const [email, setEmail] = React.useState('');
   const [password, setPwd] = React.useState('');
   const [passwordCheck, setPwdCheck] = React.useState('');

  //  회원가입하기 버튼 누르면 호출되는 로그인 함수 

  const signup = () => {

    if (username ==="" || email ==="" || password ===""){
        window.alert("아이디, 이메일, 패스워드를 모두 입력해주세요");
        return;
    }
    
    if(!emailCheck(email)){
        window.alert("이메일 형식이 맞지 않습니다");
        return;
    }

    if(password!==passwordCheck){
        window.alert("패스워드와 패스워드 확인이 일치하지 않습니다");
        return;
    }

    dispatch(userActions.signupDB(username, email, password, passwordCheck));

}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'gray' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="id"
                  label="아이디"
                  placeholder="사용하실 아이디를 입력하세요"
                  name="id"
                  autoComplete="id"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일"
                  placeholder="사용하실 이메일을 입력하세요"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="패스워드"
                  placeholder="사용하실 패스워드를 입력하세요"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => {
                    setPwd(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="패스워드 확인"
                  placeholder="위와 동일하게 패스워드를 입력해주세요"
                  type="password"
                  id="pwd_check"
                  autoComplete="new-password"
                  onChange={(e) => {
                    setPwdCheck(e.target.value);
                  }}
                />
              </Grid>
              
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signup}
            >
              회원가입하기
            </Button>
            
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
};

export default Signup;
