import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";

import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 70vw;
  min-height: 900px;
  background-color: #c0c0c0;

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
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Main = (props) => {
  const postList = useSelector((state) => state.posts.list);

  return (
    <>
      <Container>
        <CardsWrappper>
          {postList.map((v, i) => {
            return (
              <Card
                key={i}
                title={v.title}
                contents={v.contents}
                img={v.img}
                userId={v.userId}
              />
            );
          })}
        </CardsWrappper>
      </Container>
    </>
  );
};

export default Main;
