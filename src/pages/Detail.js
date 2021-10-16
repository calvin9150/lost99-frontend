import React, { useEffect } from "react";
import styled from "styled-components";
import { api } from "../lib/apis";
import { actionCreators as postsActions } from "../redux/modules/posts";
import { actionCreators as commentActions } from "../redux/modules/comment";
//react hook
import { useSelector, useDispatch } from "react-redux";
//components
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";
const Detail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;

  // const user_info = useSelector((state) => state.user.user)

  const post_list = useSelector((state) => state.posts.list); //리덕스의 post리스트들
  const post_idx = post_list.findIndex((p) => p.id == id); //리스트 중에서 주소창Id 와 같은 post순번
  const post = post_list[post_idx]; //상세페이지에서 보여줄 post
  const commentList = useSelector((state) => state.comment.list);
  console.log("commentList");

  useEffect(() => {
    dispatch(postsActions.getPostsMiddleware());
    dispatch(commentActions.getCommentsMiddleware(id));
  }, [dispatch]);

  return (
    <>
      <Container style={{ padding: "16px" }}>
        <Grid style={{ padding: "0px" }}>
          <PreviewGrid>
            <Image src={post && post.imageUrl} />
          </PreviewGrid>
        </Grid>

        <Grid style={{ padding: "8px" }}>
          <Grid style={{ padding: "8px 0px" }}>
            <Title>{post && post.title}</Title>
          </Grid>
          <Grid style={{ padding: "8px 0px" }}>
            <Label>location</Label>
            <Text>{post && post.location}</Text>
          </Grid>
          <Grid style={{ padding: "8px 0px" }}>
            <Label>Contact number</Label>
            <Text>{post && post.phonenumber}</Text>
          </Grid>
          <Grid style={{ padding: "8px 0px" }}>
            <Label>Contents</Label>
            <Text>{post && post.contents}</Text>
          </Grid>
        </Grid>
      </Container>
      <Container
        style={{
          margin: "10px auto",
        }}
      >
        <Grid style={{ padding: "15px" }}>
          <CommentWrite id={id} />
        </Grid>
      </Container>
      <CommentContainer>
        {commentList.map((v, i) => (
          <CommentList
            key={i}
            id={id}
            comment={v.comment}
            username={v.username}
          />
        ))}
      </CommentContainer>
    </>
  );
};

export default Detail;

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-around;
  border-radius: 4px;
  color: black;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  justify-content: space-around;
  border-radius: 4px;
  color: black;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 5px 0px;
  overflow: hidden;
`;

const PreviewGrid = styled.div`
  width: 100%;
  height: auto;
  margin: 10px auto;
  box-sizing: border-box;

  @media screen and (max-width: 720px) {
    display: flex;
    justify-content: center;
  }
`;

const Image = styled.img`
  width: 35vw;
  height: auto;
  object-fit: cover;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  margin: 0px;
`;

const Text = styled.p`
  size: 10px;
`;

const Label = styled.p`
  margin: 0px;
  font-size: 30px;
  font-weight: bold;
`;
