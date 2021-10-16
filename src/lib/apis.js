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
  const token = getCookie("token");
  if (token) {
    return `Bearer ${token}`;
  } else {
    return null;
  }
};

api.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  config.headers["Accept"] = "*/*";
  config.headers["authorization"] = getToken();
  return config;
});
