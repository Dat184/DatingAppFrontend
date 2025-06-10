import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    logout: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart(state) {
      state.login.isFetching = true;
      state.login.error = false;
    },
    loginSuccess(state, action) {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailure(state) {
      state.login.isFetching = false;
      state.login.error = true;
    },
    logoutStart(state) {
      state.logout.isFetching = true;
      state.logout.error = false;
    },
    logoutSuccess(state) {
      state.logout.isFetching = false;
      state.logout.currentUser = null;
      state.logout.error = false;
    },
    logoutFailure(state) {
      state.logout.isFetching = false;
      state.logout.error = true;
    },
  },
});
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} = authSlice.actions;

export default authSlice.reducer;
