import axios from "axios";

// .env 파일은 src폴더 바깥에 각자마다 생성 해주셔야 합니다.
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
