import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { history } from "../redux/configureStore";
import { actionCreators as postsActions } from "../redux/modules/posts";
import { CardHeader } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

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

const LoginId = "gom";

const CardLayout = ({
  title,
  contents,
  img,
  userId,
  id,
  location = "전국",
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [isMine, setIsMine] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (userId === LoginId) {
      setIsMine(true);
    }
  }, [userId]);

  const onClickCard = useCallback(
    (e) => {
      history.push(`/detail/${id}`);
    },
    [id]
  );

  const onClickDelete = useCallback(() => {
    if (!window.confirm(`[ ${title} ]을 삭제하실건가요?`)) {
      dispatch(postsActions.deletePostMiddleware(id));
      setIsMine(false);
      return;
    }
  }, [id, dispatch, title]);

  return (
    <Wrapper load={false}>
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
                <Button variant="contained" color="primary">
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
