import axiosInstance from "../../axios/axios.interceptor";
import {
  plantDetailFailure,
  plantDetailStart,
  plantDetailSuccess,
  plantListFailure,
  plantListStart,
  plantListSuccess,
} from "../slice/planSlice";

export const getPlanDetail = async (planId: string, dispatch: any) => {
  dispatch(plantDetailStart());
  try {
    const response = await axiosInstance(`/api/v1/plans/${planId}`);
    dispatch(plantDetailSuccess(response.data));
  } catch (error: any) {
    const errorCode = error.response?.data?.code;
    console.error("Error fetching plan detail:", errorCode);
    dispatch(plantDetailFailure());
  }
};

export const getPlanList = async (dispatch: any) => {
  dispatch(plantListStart());
  try {
    const res = await axiosInstance.get(`/api/v1/plans`);
    dispatch(plantListSuccess(res.data));
  } catch (err: any) {
    const errorCode = err.response?.data?.code;
    console.error("Error fetching plan list:", errorCode);
    dispatch(plantListFailure());
  }
};
