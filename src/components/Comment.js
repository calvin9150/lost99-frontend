import React from "react";
import styled from "styled-components";
//material
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Comment = () => {
  const [comment, setComment] = React.useState("");
  const changeComment = (e) => {
    setComment(e.target.value);
  };
  return (
    <React.Fragment>
      <Grid
        style={{
          width: "100vw",
          padding: "16px",
        }}
      >
        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Grid style={{ width: "90%" }}>
            <TextField
              id="outlined-secondary"
              label="댓글"
              variant="outlined"
              color="secondary"
              size="small"
              value={comment}
              onChange={changeComment}
              autoComplete="off"
            />
          </Grid>
          <Grid style={{ width: "10%", marginLeft: "10px" }}>
            <Button variant="contained" color="secondary" size="large">
              추가
            </Button>
          </Grid>
        </Grid>

        <Grid
          style={{
            flexDirection: "row",
          }}
        >
          <Grid style={{ width: "20%" }}>
            <Text>동건</Text>
          </Grid>
          <Grid style={{ width: "80%" }}>
            <Text>멍멍이멍멍이멍멍이멍멍이멍멍이</Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Comment;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  width: 100%;
  margin: 10px 0px;
  // overflow: hidden;
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
