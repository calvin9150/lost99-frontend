import axios from "axios";
import { getCookie } from "../shared/Cookie";

export const api = axios.create({
  // 요청을 보낼 주소 설정
  // baseURL: "http://localhost:3001/",
  baseURL: "http://3.36.94.200/api/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});

const getToken = async () => {
  const token = localStorage.getItem("token");
  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc2QxMjMiLCJpYXQiOjE2MzQzNzY3ODIsImV4cCI6MTYzNDM3ODU4Mn0.l98ExCgb3hw7Yt270P3N4_Qt4X2wz4Sg7sUwS29rZXM";
  console.log("token");
  console.log(token);
  if (token) {
    alert("z");
    return `Bearer ${token}`;
  } else {
    return null;
  }
};

api.interceptors.request.use(async (config) => {
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  config.headers["Accept"] = "*/*";
  config.headers["authorization"] = await getToken();
  return config;
});
