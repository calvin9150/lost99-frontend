import React from "react";
import styled from "styled-components";
//material
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";

const CommentList = () => {
  const comment_list = useSelector((state) => state.comment.list);
  console.log(comment_list);

  const updateComment = () => {

  };
  const deleteComment = () => {

  };


  if (comment_list.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      <Grid
        style={{
          flexDirection: "row",
          height: "4vh",
        }}
      >
        <Grid>
          <Text>{comment_list.username}</Text>
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
          value={comment_list.comment}
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

export default CommentList;

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
