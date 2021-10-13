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
  display: ${(props) => (props.loading ? "none" : "unset")};
  margin: 20px;
  user-select: none;
`;

const LoginId = "gom";

const CardLayout = ({ title, contents, img, userId, id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [isMine, setIsMine] = useState(false);

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
    if (window.confirm(`[ ${title} ]을 삭제하실건가요?`)) {
      dispatch(postsActions.deletePostMiddleware(id));
      setIsMine(false);
      return;
    }
  }, [id, dispatch, title]);

  return (
    <Wrapper loading={false}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={img}
          alt="사진"
          onClick={onClickCard}
        />
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            noWrap={true}
            onClick={onClickCard}
          >
            {title}
          </Typography>
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
