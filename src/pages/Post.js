import React from "react";
import styled from "styled-components";

//redux & api
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

//elements
import Upload from "../elements/Upload";

//material
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Post = (props) => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  const imgurl = useSelector((state) => state.image.image_url);
  const classes = useStyles();

  const [title, setTitle] = React.useState("");
  const [phonenumber, setPhonenumber] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [contents, setContents] = React.useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changePhonenumber = (e) => {
    setPhonenumber(e.target.value);
  };
  const changeLocation = (e) => {
    setLocation(e.target.value);
  };
  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    if(title === "" || phonenumber === "" || location === "" || contents === "") {
      return window.alert("빈칸을 입력해주세요")
    }
    
    if(preview === null) {
      return window.alert("이미지 선택 후 업로드 버튼을 눌려주세요")
    }
    const post = { title, phonenumber, contents, location, imgurl };
    dispatch(postActions.addPostsMiddleware(post));
  };

  const locationName = [
    "부산",
    "대구",
    "대전",
    "강원",
    "광주",
    "경기",
    "인천",
    "제주",
    "충북",
    "경북",
    "전북",
    "세종",
    "서울",
    "충남",
    "경남",
    "전남",
    "울산",
  ];
  return (
    <Container style={{ padding: "16px" }}>
      <Grid style={{ padding: "0px" }}>
        <Upload />
        <PreviewGrid>
          <Image
            src={
              preview
                ? preview
                : "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image-300x225.png"
            }
          />
        </PreviewGrid>
      </Grid>

      <Grid style={{ padding: "8px" }}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">위치</InputLabel>
          <Select value={location} onChange={changeLocation}>
            {locationName.map((l, i) => {
              return (
                <MenuItem key={i} value={l}>
                  {l}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Grid style={{ padding: "8px 0px" }}>
          <TextField
            id="outlined-secondary"
            label="제목"
            variant="outlined"
            color="secondary"
            size="small"
            required
            value={title}
            onChange={changeTitle}
          />
        </Grid>
        <Grid style={{ padding: "8px 0px" }}>
          <TextField
            id="outlined-secondary"
            label="연락처"
            variant="outlined"
            color="secondary"
            size="small"
            value={phonenumber}
            onChange={changePhonenumber}
          />
        </Grid>
        <Grid style={{ padding: "8px 0px" }}>
          <TextField
            id="outlined-secondary"
            label="내용"
            variant="outlined"
            color="secondary"
            size="small"
            value={contents}
            onChange={changeContents}
            multiline
            minRows="5"
          />
        </Grid>

        <Button
          variant="contained"
          size="small"
          color="primary"
          className={classes.margin}
          onClick={addPost}
        >
          게시글 추가
        </Button>
      </Grid>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  display: flex;
  width: 80vw;
  height: auto;
  margin: auto;
  justify-content: space-around;

  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 720px) {
    width: 90vw;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35vw;
  margin: 10px 0px;
  overflow: hidden;
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PreviewGrid = styled.div`
  width: 35vw;
  height: auto;
  margin: 10px auto;
  box-sizing: border-box;
  // border: 1px solid black;
  overflow: hidden;
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Image = styled.img`
  width: 35vw;
  height: auto;
  object-fit: cover;
`;
