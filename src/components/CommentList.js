import React from "react";
import styled from "styled-components";
//material
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//redux & api
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList = (props) => {
  const post_id = props.id; // post(parmas 번호)
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);// 모든 comment
  const user_id = useSelector((state) => state.user.user.username);// 로그인한 유저 아이디
  

  // const id = comment_list.id;

  // console.log(comment_list);

  if (comment_list.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      {comment_list.map((c) => {
        return <CommentItem key={c.id} {...c} />;
      })}
    </React.Fragment>
  );
};

export default CommentList;

const CommentItem = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);
  const user_id = useSelector((state) => state.user.user.username);
  const [comment, setComment] = React.useState(comment_list.comment);
  // const commentid = comment_list.id;
  const _comment = comment_list.comment;

  const updateComment = () => {
    dispatch(commentActions.updateComment({  _comment }));
  };
  const deleteComment = () => {
    dispatch(commentActions.deleteComment({  }));
  };
  console.log(props)
  return (
    <React.Fragment>
      <Grid
        style={{
          flexDirection: "row",
          height: "4vh",
        }}
      >
        <Grid>
          <Text>{user_id}</Text>
        </Grid>
      </Grid>
      <Grid style={{ marginTop: "10px" }}>
        <TextField
          id="outlined-secondary"
          label=""
          variant="outlined"
          color="secondary"
          size="small"
          multiline
          onChange={setComment}
          value={comment_list && _comment}
          minRows="2"
          autoComplete="off"
        />
      </Grid>
      <Grid
        style={{
          flexDirection: "row",
          margin: "5px 0px",
        }}
      >
        <Button
          style={{
            width: "10%",
            margin: "0px 0px",
          }}
          variant="contained"
          color="primary"
          size="small"
          onClick={updateComment}
        >
          수정
        </Button>
        <Button
          style={{
            width: "10%",
          }}
          variant="contained"
          color="secondary"
          size="small"
          onClick={deleteComment}
        >
          삭제
        </Button>
      </Grid>
    </React.Fragment>
  );
};

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  //   justify-content: space-between;
  width: 100%;
  //   margin: 10px 0px;
  overflow: hidden;
  @media screen and (max-width: 720px) {
    display: block;
  }
`;

const Text = styled.p`
  margin: 0px;
`;
