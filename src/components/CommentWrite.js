import React from "react";
import styled from "styled-components";
//material
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//redux & api
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { CommentSharp } from "@material-ui/icons";

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const id = props.id
  // console.log(props.id)
  // const username = useSelector((state) => state.user.user.username);
  // const _comment = useSelector((state) => state.comment.comment);

  const [comment, setComment] = React.useState();
  
  const changeComment = (e) => {
    setComment(e.target.value);
    console.log(e.target.value);
  };

  const addComment = () => {
    dispatch(commentActions.addCommentMiddleware({ id, comment }));
  };

  return (
    <React.Fragment>
      <Grid>
        <TextField
          style={{
            margin: "5px 0px",
          }}
          id="outlined-secondary"
          label="댓글"
          variant="outlined"
          color="secondary"
          size="small"
          value={comment}
          onChange={changeComment}
          multiline
          minRows="2"
          autoComplete="off"
        />
      </Grid>
      <Grid>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={addComment}
        >
          댓글 추가
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 10px 0px;
  overflow: hidden;
  @media screen and (max-width: 720px) {
    display: block;
  }
`;
