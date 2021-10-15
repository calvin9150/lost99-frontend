import React from "react";
import styled from "styled-components";
//material
import TextField from "@material-ui/core/TextField";

const Comment = () => {
  return (
    <React.Fragment>
      <Grid style={{ padding: "8px 0px" }}>
        <TextField
          id="outlined-secondary"
          label="댓글"
          variant="outlined"
          color="secondary"
          size="large"
          value=""
          onChange=""
        />
        <Grid
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ size: "10px" }}>동건</Text>
          <Text>멍멍이멍멍이멍멍이멍멍이멍멍이</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Comment;

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

const Text = styled.p`
  size: 10px;
`;
