import React from "react";
import styled from "styled-components";
//material
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//redux & api
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList = ({ id, comment, username }) => {
  const dispatch = useDispatch();
  // const comment_list = useSelector((state) => state.comment.list);
  // const [comment, setComment] = React.useState(comment_list.comment);
  // const commentid = comment_list.id;
  // const _comment = comment_list.comment;

  // const updateComment = () => {
  //   dispatch(commentActions.updateComment({ _comment }));
  // };
  // const deleteComment = () => {
  //   dispatch(commentActions.deleteComment({}));
  // };
  // console.log(props);
  return (
    <>
      <Grid
        style={{
          flexDirection: "row",
          height: "4vh",
        }}
      >
        <Grid>{/* <Text>{user_id}</Text> */}</Grid>
      </Grid>
      <Grid style={{ marginTop: "10px" }}>
        <TextBox>
          <div>작성자 : {username}</div>
          <div>내용 : {comment}</div>
        </TextBox>
      </Grid>
      {/* <Grid
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
      </Grid> */}
    </>
  );
};

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //   margin: 10px 0px;
  overflow: hidden;
  @media screen and (max-width: 720px) {
    display: block;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1em;
  color: black;
  border-bottom: 1px solid #c0c0c0; ;
`;
export default CommentList;
