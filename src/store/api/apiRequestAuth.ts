import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutFailure,
  logoutSuccess,
} from "../slice/authSlice";
import axiosInstance from "../../axios/axios.interceptor";

export const loginUserByGoogle = async (
  token: string,
  dispatch: any,
  navigate: any
) => {
  try {
    console.log("API: ", axiosInstance.defaults.baseURL);
    const res = await axiosInstance.post(`/api/v1/auth/google/login`, {
      idToken: token,
    });
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (err: any) {
    const errorCode = err.response?.data?.code;
    console.log(errorCode);
    dispatch(loginFailure());
    navigate("/dang-nhap");
  }
};

export const logoutUser = async (dispatch: any, navigate: any) => {
  try {
    dispatch(logoutSuccess());
    navigate("/dang-nhap");
  } catch (err: any) {
    console.log(err);
    dispatch(logoutFailure());
  }
};

// login cho admin
export const login = async (dispatch: any, navigate: any) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.get(`/api/v1/auth/login`);
    dispatch(loginSuccess(res.data));
    // theem dieeu kienj check data la admin
    // neu la admin thi redirect ve trang admin
    navigate("/");
  } catch (err: any) {
    console.log(err);
    dispatch(loginFailure());
    navigate("/dang-nhap");
  }
};
