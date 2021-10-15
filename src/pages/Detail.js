import React, { useEffect } from "react";
import styled from "styled-components";
import { api } from "../lib/apis";
import { actionCreators as postsActions } from "../redux/modules/posts";
//react hook
import { useSelector, useDispatch } from "react-redux";
//components
import Comment from "../components/Comment";

const Detail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;

  // const user_info = useSelector((state) => state.user.user)

  const post_list = useSelector((state) => state.posts.list); //리덕스의 post리스트들

  const post_idx = post_list.findIndex((p) => p.id == id); //리스트 중에서 주소창Id 와 같은 post순번

  const post = post_list[post_idx]; //상세페이지에서 보여줄 post

  useEffect(() => {
    dispatch(postsActions.getPostsMiddleware());
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
      <Container>
        
          <Comment />
        
      </Container>
    </>
  );
};

export default Detail;

const Container = styled.div`
  display: flex;
  width: 80vw;
  height: auto;
  margin: auto;
  justify-content: space-around;

  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 720px) {
    width: 90vw;
  }
`;

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

const PreviewGrid = styled.div`
  width: 35vw;
  height: auto;
  margin: 10px auto;
  box-sizing: border-box;
  // border: 1px solid black;
  overflow: hidden;
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Image = styled.img`
  width: 35vw;
  height: auto;
  object-fit: cover;
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
