import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 70vw;
  min-height: 900px;
  background-color: #c0c0c0;
`;

const CardsWrappper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 70px 0;
  width: 90%;
  background-color: gray;
`;

const Main = (props) => {
  return (
    <>
      <Container>
        <CardsWrappper>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </CardsWrappper>
      </Container>
    </>
  );
};

export default Main;
