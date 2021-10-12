import React from "react";
import styled from "styled-components";

//redux & api
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

//elements
import Upload from "../elements/Upload";

const Post = (props) => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  const [title, setTitle] = React.useState("");
  const [phonenumber, setPhonenumber] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [contents, setContents] = React.useState("");
  const changeTitle = (e) => {
    setTitle(e.target.value);
    // console.log(e.target.value); 타이틀 인풋값
  };
  const changePhonenumber = (e) => {
    setPhonenumber(e.target.value);
    // console.log(e.target.value); 연락처 인풋값
  };
  const changeLocation = (e) => {
    setLocation(e.target.value);
    // console.log(e.target.value); 내용 인풋값
  };
  const changeContents = (e) => {
    setContents(e.target.value);
    // console.log(e.target.value); 내용 인풋값
  };
  //리덕스에 item,contact_num,contents 저장
  const addPost = () => {
    dispatch(
      postActions.addPostsMiddleware(title, phonenumber, contents, location)
    );
  };

  return (
    <Container>
      <CardsWrappper>
        <div>추가 페이지입니다.</div>
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
              preview
                ? preview
                : "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image-300x225.png"
            }
            alt=""
          />
        </div>
        <div>
          <input value={title} onChange={changeTitle} />
          <input value={phonenumber} onChange={changePhonenumber} />
          <input value={location} onChange={changeLocation} />
          <input value={contents} onChange={changeContents} />
        </div>
        <button onClick={addPost}>추가</button>
        (서버 쪽에 저장후)//// 리덕스에 넣어주기
      </CardsWrappper>
    </Container>
  );
};

export default Post;

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
