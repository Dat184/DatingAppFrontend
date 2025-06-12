import axios from "axios";

import { store } from "../store/store";
import { loginSuccess, logoutSuccess } from "../store/slice/authSlice";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: any) => void;
  reject: (error: any) => void;
}> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve(token);
    }
  });
  
  failedQueue = [];
};

const refreshAccessToken = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/auth/refresh-token`,
      { withCredentials: true }
    );
    console.log("Refresh Token Response:", response);
    return response.data;
  } catch (error) {
    console.error("Refresh token failed", error);
    throw error;
  }
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error("Axios Interceptor Error:", error);

    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(() => {
          return axiosInstance(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await refreshAccessToken();
        store.dispatch(loginSuccess(res));
        processQueue(null, res.accessToken);
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.log("Token expired, logging out...", refreshError);
        processQueue(refreshError, null);
        store.dispatch(logoutSuccess());

        if (window.location.pathname !== "/dang-nhap") {
          window.location.href = "/dang-nhap";
        }
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;