import React from "react";
import styled from "styled-components";
//react hook
import { useSelector } from "react-redux";
//elements

const Detail = (props) => {
  const id = props.match.params.id;

  // const user_info = useSelector((state) => state.user.user)

  const post_list = useSelector((state) => state.posts.list); //리덕스의 post리스트들

  const post_idx = post_list.findIndex((p) => p.id == id); //리스트 중에서 주소창Id 와 같은 post순번

  const post = post_list[post_idx]; //상세페이지에서 보여줄 post
  console.log(post_list);
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
              
            }}
            src={post.image_url}
          />
        </div>
        <div>
          <text>{post.title}</text>
        </div>
        <div>
          <text>{post.phonenumber}</text>
        </div>
        <div>
          <text>{post.location}</text>
        </div>
        <div>
          <text>{post.contents}</text>
        </div>
      </CardsWrappper>
    </Container>
  );
};

Detail.defaultProps = {
  title: "지갑 주웠습니다~",
  contact_number: "0101010101010",
  contents: "지갑 잊어버린분 ~",
  image_url: "http://gdimg.gmarket.co.kr/1136457596/still/600?ver=1621482467",
};

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
