import React, { useEffect, useState } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import styled from "styled-components";

// const Layout = styled.div`
//   width: 300px;
//   height: 450px;
//   border: 1px solid black;
//   margin: 20px;
// `;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
    padding: 5,
  },
  media: {
    height: 250,
  },
  content: {
    height: 110,
  },
});

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 1em;
`;

const LoginId = "gom";

const CardLayout = ({ title, contents, img, userId }) => {
  const [isMine, setIsMine] = useState(false);

  useEffect(() => {
    if (userId === LoginId) {
      setIsMine(true);
    }
  }, [userId]);

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={img} alt="사진" />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="div" noWrap={true}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          noWrap={isMine}
        >
          {contents}
        </Typography>
        <CardActions>
          {isMine && (
            <Buttons>
              <Button variant="contained" color="primary">
                수정하기
              </Button>
              <Button variant="contained" color="secondary">
                삭제하기
              </Button>
            </Buttons>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default CardLayout;
