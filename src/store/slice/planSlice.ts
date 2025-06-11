import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
  name: "plan",
  initialState: {
    createPlan: {
      data: null,
      isFetching: false,
      error: false,
    },
    planDetail: {
      data: null,
      isFetching: false,
      error: false,
    },
    planList: {
      data: [],
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    createPlanStart(state) {
      state.createPlan.isFetching = true;
      state.createPlan.error = false;
    },
    createPlanSuccess(state, action) {
      state.createPlan.isFetching = false;
      state.createPlan.data = action.payload;
      state.createPlan.error = false;
    },
    createPlanFailure(state) {
      state.createPlan.isFetching = false;
      state.createPlan.error = true;
    },

    plantDetailStart(state) {
      state.planDetail.isFetching = true;
      state.planDetail.error = false;
    },
    plantDetailSuccess(state, action) {
      state.planDetail.isFetching = false;
      state.planDetail.data = action.payload;
      state.planDetail.error = false;
    },
    plantDetailFailure(state) {
      state.planDetail.isFetching = false;
      state.planDetail.error = true;
    },

    plantListStart(state) {
      state.planList.isFetching = true;
      state.planList.error = false;
    },
    plantListSuccess(state, action) {
      state.planList.isFetching = false;
      state.planList.data = action.payload;
      state.planList.error = false;
    },
    plantListFailure(state) {
      state.planList.isFetching = false;
      state.planList.error = true;
    },
  },
});

export const {
  createPlanStart,
  createPlanSuccess,
  createPlanFailure,
  plantDetailStart,
  plantDetailSuccess,
  plantDetailFailure,
  plantListStart,
  plantListSuccess,
  plantListFailure,
} = planSlice.actions;

export default planSlice.reducer;
