import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "../api/apiRequestUser";

const userSlice = createSlice({
  name: "user",
  initialState: {
    getUserById: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    getMyInfo: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    updateInfo: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    getListInvite: {
      data: [],
      isFetching: false,
      error: false,
    },
    addPartner: {
      data: null,
      isFetching: false,
      error: false,
    },
    acceptPartner: {
      data: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getUserByIdStart(state) {
      state.getUserById.isFetching = true;
      state.getUserById.error = false;
    },
    getUserByIdSuccess(state, action) {
      state.getUserById.isFetching = false;
      state.getUserById.currentUser = action.payload;
      state.getUserById.error = false;
    },
    getUserByIdFailure(state) {
      state.getUserById.isFetching = false;
      state.getUserById.error = true;
    },

    updateInfoStart(state) {
      state.updateInfo.isFetching = true;
      state.updateInfo.error = false;
    },
    updateInfoSuccess(state, action) {
      state.updateInfo.isFetching = false;
      state.updateInfo.currentUser = action.payload;
      state.updateInfo.error = false;
    },
    updateInfoFailure(state) {
      state.updateInfo.isFetching = false;
      state.updateInfo.error = true;
    },

    getListInviteStart(state) {
      state.getListInvite.isFetching = true;
      state.getListInvite.error = false;
    },
    getListInviteSuccess(state, action) {
      state.getListInvite.isFetching = false;
      state.getListInvite.data = action.payload;
      state.getListInvite.error = false;
    },
    getListInviteFailure(state) {
      state.getListInvite.isFetching = false;
      state.getListInvite.error = true;
    },

    addPartnerStart(state) {
      state.addPartner.isFetching = true;
      state.addPartner.error = false;
    },
    addPartnerSuccess(state, action) {
      state.addPartner.isFetching = false;
      state.addPartner.data = action.payload;
      state.addPartner.error = false;
    },
    addPartnerFailure(state) {
      state.addPartner.isFetching = false;
      state.addPartner.error = true;
    },

    acceptPartnerStart(state) {
      state.acceptPartner.isFetching = true;
      state.acceptPartner.error = false;
    },
    acceptPartnerSuccess(state, action) {
      state.acceptPartner.isFetching = false;
      state.acceptPartner.data = action.payload;
      state.acceptPartner.error = false;
    },
    acceptPartnerFailure(state) {
      state.acceptPartner.isFetching = false;
      state.acceptPartner.error = true;
    },
    getMyInfoStart(state) {
      state.getMyInfo.isFetching = true;
      state.getMyInfo.error = false;
    },
    getMyInfoSuccess(state, action) {
      state.getMyInfo.isFetching = false;
      state.getMyInfo.currentUser = action.payload;
      state.getMyInfo.error = false;
    },
    getMyInfoFailure(state) {
      state.getMyInfo.isFetching = false;
      state.getMyInfo.error = true;
    },
  },
});

export const {
  getUserByIdStart,
  getUserByIdSuccess,
  getUserByIdFailure,
  updateInfoStart,
  updateInfoSuccess,
  updateInfoFailure,
  getListInviteStart,
  getListInviteSuccess,
  getListInviteFailure,
  addPartnerStart,
  addPartnerSuccess,
  addPartnerFailure,
  acceptPartnerStart,
  acceptPartnerSuccess,
  acceptPartnerFailure,
  getMyInfoStart,
  getMyInfoSuccess,
  getMyInfoFailure,
} = userSlice.actions;

export default userSlice.reducer;
