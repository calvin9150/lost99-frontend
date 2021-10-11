import React from "react";
import styled from "styled-components";
//elements

import { useSelector } from "react-redux";

const Detail = (props) => {

  const post = useSelector((state) => state.post.list)
  
  return (
    <Container>
      <CardsWrappper>
        <div>상세 페이지입니다.</div>

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

            src={props.image_url}
          />
        </div>
        <div>
          <text>{props.title}</text>
        </div>
        <div>
          <text>{props.contact_number}</text>
        </div>
        <div>
          <text>{props.contents}</text>
        </div>
      </CardsWrappper>
    </Container>
  );
};

Detail.defaultProps = {
  title : "지갑 주웠습니다~",
  contact_number : "0101010101010",
  contents : "지갑 잊어버린분 ~",
  image_url: "http://gdimg.gmarket.co.kr/1136457596/still/600?ver=1621482467"


}



export default Detail;

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
