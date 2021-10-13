export const emailCheck = (email)=>{

    // 정규식 패턴 만들어주기
    // ^ 쓰면 "첫글자만" 이라는 뜻 ()*은 여러개 들어올 때 

    let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
    
    // 정규식이 맞는지 테스트하기
    console.log(_reg.test(email));


return _reg.test(email);
  
}


