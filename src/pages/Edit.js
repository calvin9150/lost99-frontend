import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { api } from "../lib/apis";
import { actionCreators as imageActions } from "../redux/modules/image";

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

const Edit = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const classes = useStyles();

  const preview = useSelector((state) => state.image.preview);
  const imgurl = useSelector((state) => state.image.image_url);
  const post = useSelector((state) => state.post.list);
  console.log(post);

  const [title, setTitle] = React.useState(post.title);
  const [phonenumber, setPhonenumber] = React.useState(post.phonenumber);
  const [location, setLocation] = React.useState(post.location);
  const [contents, setContents] = React.useState(post.contents);
  console.log(title);

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

  const updatePost = () => {
    const _post = { id, title, phonenumber, contents, location, imgurl };
    dispatch(postActions.updatePostMiddleware(id, _post));
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
  const [list, setList] = React.useState([]);
  useEffect(() => {
    api.get(`/contents/${id}`).then((res) => {
      const onePost = res.data;
      setList(...list, onePost);
      dispatch(postActions.addPost(onePost));
    });
  }, []);

  useEffect(() => {
    setTitle(post.title);
    setPhonenumber(post.phonenumber);
    setLocation(post.location);
    setContents(post.contents);
    dispatch(imageActions.setPreview(post.imgurl));
  }, [post]);

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
            defaultValue
            variant="outlined"
            color="secondary"
            size="small"
            value={title}
            onChange={changeTitle}
          />
        </Grid>
        <Grid style={{ padding: "8px 0px" }}>
          <TextField
            id="outlined-secondary"
            label="연락처"
            defaultValue
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
            defaultValue
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
          onClick={updatePost}
        >
          게시글 수정
        </Button>
      </Grid>
    </Container>
  );
};

export default Edit;

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
