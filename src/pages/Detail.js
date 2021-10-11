import React from "react";

const Detail = (props) => {
  return (
    <div>
      <div>상세 페이지입니다.</div>
      <div>물품이미지</div>
      <div>물픔명</div>
      <div>분실시간, 습득시간</div>
      <div>분실장소,습득장소</div>
      <div>연락처</div>
      <div>상세내용</div>
      <button>수정하기</button>
      <button>추가하기</button>  
      <button>삭제하기</button>
      <div>리덕스에서 데이터 가져오기(어떤 게시물인지 확인--> 서버쪽에 저장된 게시물 아이디 비교?)</div>   

    </div>
  )
};

export default Detail;
