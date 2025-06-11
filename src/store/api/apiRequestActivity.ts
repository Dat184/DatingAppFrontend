import axiosInstance from "../../axios/axios.interceptor";
import {
  activityDetailFailure,
  activityDetailStart,
  activityDetailSuccess,
} from "../slice/activitySlice";

export const getActivity = async (planid: string, dispatch: any) => {
  dispatch(activityDetailStart());
  try {
    const res = await axiosInstance.get(`/api/v1/activities/${planid}`);
    dispatch(activityDetailSuccess(res.data));
  } catch (err: any) {
    const errorCode = err.response?.data?.code;
    console.log(errorCode);
    dispatch(activityDetailFailure());
  }
};

export interface activity {
  planId: string;
  title: string;
  time: string;
  location: string;
  notes: string;
}

export const createActivity = async (
  activity: activity,
  dispatch: any,
  navigate: any
) => {
  dispatch(activityDetailStart());
  try {
    const res = await axiosInstance.post(`/api/v1/activities`, {
      activity: activity,
    });
    dispatch(activityDetailSuccess(res.data));
    navigate("/ke-hoach-cua-toi");
  } catch (err: any) {
    const errorCode = err.response?.data?.code;
    console.log(errorCode);
    dispatch(activityDetailFailure());
  }
};

export const createActivities = async (
  activities: activity[],
  dispatch: any,
  navigate: any
) => {
  dispatch(activityDetailStart());
  try {
    const res = await axiosInstance.post(`/api/v1/activities/many`, {
      activities: activities,
    });
    dispatch(activityDetailSuccess(res.data));
    navigate("/ke-hoach-cua-toi");
  } catch (err: any) {
    const errorCode = err.response?.data?.code;
    console.log(errorCode);
    dispatch(activityDetailFailure());
  }
};

export const updateActivities = async (
  activities: activity[],
  dispatch: any,
  navigate: any
) => {
  dispatch(activityDetailStart());
  try {
    const res = await axiosInstance.patch(`/api/v1/activities`, {
      activities: activities,
    });
    dispatch(activityDetailSuccess(res.data));
    navigate("/ke-hoach-cua-toi");
  } catch (err: any) {
    const errorCode = err.response?.data?.code;
    console.log(errorCode);
    dispatch(activityDetailFailure());
  }
};
