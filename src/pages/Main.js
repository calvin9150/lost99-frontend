import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import Card from "../components/Card";
import { actionCreators as postsActions } from "../redux/modules/posts";
import Modal from "../components/Modal";
import Map from "../components/Map";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 60vw;
  /* min-height: 900px; */
  /* background-color: #c0c0c0; */

  @media screen and (max-width: 720px) {
    width: 90vw;
  }
`;

const CardsWrappper = styled.div`
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 90%;
  /* background-color: gray; */
  @media screen and (max-width: 1580px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    margin: auto;
  }
`;

const NoList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 320px;
  margin-top: 0.8em;
  background-color: rgba(150, 150, 150, 0.123);
  font-size: 3em;
  border-radius: 0.5em;
`;

const Main = (props) => {
  const dispatch = useDispatch();

  const {
    list: postList,
    isLoading: loading,
    mapSelected,
  } = useSelector((state) => state.posts);

  console.log(postList, "postList");

  const selectedList = postList.filter((v) => {
    return mapSelected === v.location || mapSelected === "전국";
  });

  useEffect(() => {
    dispatch(postsActions.getPostsMiddleware());
  }, [dispatch]);

  return (
    <Container>
      <Modal visible={loading}>
        <CircularProgress />
      </Modal>
      <Map />
      <CardsWrappper>
        {selectedList.map((v, i) => (
          <Card
            key={i}
            title={v.title}
            contents={v.contents}
            img={v.imageUrl}
            userId={v.username}
            id={v.id}
            location={v.location}
          />
        ))}
      </CardsWrappper>
      {selectedList.length === 0 && (
        <NoList>이 지역에는 접수된 분실물이 없어요..</NoList>
      )}
    </Container>
  );
};

export default Main;
