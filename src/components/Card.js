import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import { history } from "../redux/configureStore";
import { actionCreators as postsActions } from "../redux/modules/posts";
import { CardHeader } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 325,
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
  z-index: 9;

  @media screen and (max-width: 720px) {
  }
`;

const Wrapper = styled.div`
  display: ${({ load }) => (load ? "none" : "unset")};
  margin: 35px 20px 20px;
  user-select: none;
`;

const CardLayout = ({
  title,
  contents,
  img,
  userId,
  id,
  location = "전국",
  loading = false,
  isLoggedIn,
  username,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [isMine, setIsMine] = useState(false);
  // const [expanded, setExpanded] = useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  useEffect(() => {
    console.log(userId, username?.username, isLoggedIn);
    if (userId === username?.username && isLoggedIn) {
      setIsMine(true);
    }
  }, [userId, username, isLoggedIn]);

  const onClickCard = useCallback(
    (e) => {
      history.push(`/detail/${id}`);
    },
    [id]
  );

  const onClickDelete = useCallback(() => {
    if (window.confirm(`[ ${title} ]을 삭제하실건가요?`)) {
      console.log(id, "id");
      dispatch(postsActions.deletePostMiddleware(id));
      setIsMine(false);
      return;
    }
    console.log(id, "id");
  }, [id, dispatch, title]);

  const onClickEdit = useCallback(() => {
    history.push(`/edit/${id}`);
  }, [id]);

  return (
    <Wrapper load={loading}>
      <Card className={classes.root}>
        <CardHeader title={title} subheader={location} onClick={onClickCard} />
        <CardMedia
          className={classes.media}
          image={img}
          alt="사진"
          onClick={onClickCard}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            noWrap={isMine}
            onClick={onClickCard}
          >
            {contents}
          </Typography>
          <CardActions>
            {isMine && (
              <Buttons>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onClickEdit}
                >
                  수정하기
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={onClickDelete}
                >
                  삭제하기
                </Button>
              </Buttons>
            )}
          </CardActions>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default CardLayout;
