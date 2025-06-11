import axiosInstance from "../../axios/axios.interceptor";
import {
  acceptPartnerFailure,
  acceptPartnerStart,
  acceptPartnerSuccess,
  addPartnerFailure,
  addPartnerStart,
  addPartnerSuccess,
  getListInviteFailure,
  getListInviteStart,
  getListInviteSuccess,
  getMyInfoFailure,
  getMyInfoStart,
  getMyInfoSuccess,
  getUserByIdFailure,
  getUserByIdStart,
  getUserByIdSuccess,
  updateInfoFailure,
  updateInfoStart,
  updateInfoSuccess,
} from "../slice/userSlice";

// get user by id
export const getUserById = async (userId: string, dispatch: any) => {
  dispatch(getUserByIdStart());
  try {
    const response = await axiosInstance.get(`/api/v1/users/${userId}`);
    dispatch(getUserByIdSuccess(response.data));
  } catch (error: any) {
    const errorCode = error.response?.data?.code;
    console.error("Error fetching user by ID:", errorCode);
    dispatch(getUserByIdFailure());
  }
};

export const getMyInfo = async (dispatch: any) => {
  dispatch(getMyInfoStart());
  try {
    const response = await axiosInstance.get(`/api/v1/users/get-my-info`);
    dispatch(getMyInfoSuccess(response.data));
  } catch (error: any) {
    const errorCode = error.response?.data?.code;
    console.error("Error fetching my info:", errorCode);
    dispatch(getMyInfoFailure());
  }
};

export const updateInfo = async (dispatch: any) => {
  dispatch(updateInfoStart());
  try {
    const response = await axiosInstance.patch(`/api/v1/users/update-my-info`);
    dispatch(updateInfoSuccess(response.data));
  } catch (error: any) {
    const errorCode = error.response?.data?.code;
    console.error("Error updating user:", errorCode);
    dispatch(updateInfoFailure());
  }
};

export const getListInvite = async (dispatch: any) => {
  dispatch(getListInviteStart());
  try {
    const response = await axiosInstance.get(
      `/api/v1/users/get-pedding-partner`
    );
    dispatch(getListInviteSuccess(response.data));
  } catch (error: any) {
    const errorCode = error.response?.data?.code;
    console.error("Error fetching list of invites:", errorCode);
    dispatch(getListInviteFailure());
  }
};

export const addPartner = async (partnerCode: string, dispatch: any) => {
  dispatch(addPartnerStart());
  try {
    const response = await axiosInstance.post(`/api/v1/users/request-partner`, {
      partnerCode,
    });
    dispatch(addPartnerSuccess(response.data));
  } catch (error: any) {
    const errorCode = error.response?.data?.code;
    console.error("Error adding partner:", errorCode);
    dispatch(addPartnerFailure());
  }
};

export const acceptPartner = async (partnerId: string, dispatch: any) => {
  dispatch(acceptPartnerStart());
  try {
    const response = await axiosInstance.post(`/api/v1/users/accept-partner`, {
      partnerId,
    });
    dispatch(acceptPartnerSuccess(response.data));
  } catch (error: any) {
    const errorCode = error.response?.data?.code;
    console.error("Error accepting partner:", errorCode);
    dispatch(acceptPartnerFailure());
  }
};
