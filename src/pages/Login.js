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



const Login = (props) => {

  const theme = createTheme();
  const dispatch = useDispatch();

  const [username, setUserName] = React.useState('');
  const [password, setPwd] = React.useState('');

  const login = () => {

    console.log(username);       
    if(username === "" || password === ""){
        window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요");
        return;
    }

    dispatch(userActions.loginDB(username, password));
};


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
        <Avatar sx={{ m: 1, bgcolor: "gray" }}>
          <LockOutlinedIcon/>
        </Avatar>

        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="id"
            label="아이디"
            name="id"
            autoComplete="id"
            placeholder="아이디를 입력하세요"
            autoFocus
            onChange={(e) => {
              setUserName(e.target.value);
          }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="패스워드"
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder="비밀번호를 입력하세요"
            onChange={(e) => {
              setPwd(e.target.value);
          }}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 1.5 }}
            onClick={() => {
              console.log("로그인버튼클릭!");
              login()}}
          >
            로그인하기
          </Button>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 0.1, mb: 2, }}
            style={{backgroundColor:'#FEE500', color:'#000000'}}
          >
            카카오 로그인
          </Button>

        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  )
};

export default Login;
