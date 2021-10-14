import axios from "axios";

export const api = axios.create({
  // 요청을 보낼 주소 설정
  // baseURL: "http://localhost:3001/",
  baseURL: "http://3.36.94.200/api/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});
