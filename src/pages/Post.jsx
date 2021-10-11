import React from "react";

const Post = (props) => {
  return (
    <div>
      <div>POST추가 페이지입니다.</div>
      <div>물품이미지------ (img태그 src)</div>
      <div>물픔명------ (추가페이지: input 메인페이지 :text)</div>
      <div>분실시간, 습득시간------ (추가페이지: input 메인페이지 :text)</div>
      <div>분실장소,습득장소------ (추가페이지: input 메인페이지 :text)</div>
      <div>연락처------ (추가페이지: input 메인페이지 :text)</div>
      <div>상세내용------ (추가페이지: input 메인페이지 :text)</div>
      <button>추가------ (추가페이지: button 메인페이지 : 없음)</button>  
      서버 쪽에 저장만?
    </div>
  );
};

Post.defaultProps = {  
}

export default Post;
