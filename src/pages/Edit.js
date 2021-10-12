import React from "react";
import styled from "styled-components";

//elements
import Upload from "../elements/Upload";

const Edit = (props) => {
  return (
    <Container>
      <CardsWrappper>
        <div>수정 페이지입니다.</div>
        <Upload />
        <div
          style={{
            width: "100%",
            height: "300px",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              margin: "auto",
            }}
            src={
              "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image-300x225.png"
            }
          />
        </div>
        <div>
          <input />
          <input />
          <input />
        </div>
        <button>수정</button>
        (서버 쪽에 저장후)//// 리덕스에 넣어주기
      </CardsWrappper>
    </Container>
  );
};

export default Edit;

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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 70px 0;
  width: 90%;
  background-color: gray;
`;
