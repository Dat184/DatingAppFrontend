import { createSlice } from "@reduxjs/toolkit";
import { Activity } from "lucide-react";



const activitySlice = createSlice({
  name: "activity",
  initialState: {
    createActivity: {
      data: null,
      isFetching: false,
      error: false,
    },
    createActivities: {
      data: [],
      isFetching: false,
      error: false,
    },
    updateActivities: {
      data: [],
      isFetching: false,
      error: false,
    },
    activityDetail: {
      data: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    createActivityStart(state) {
      state.createActivity.isFetching = true;
      state.createActivity.error = false;
    },
    createActivitySuccess(state, action) {
      state.createActivity.isFetching = false;
      state.createActivity.data = action.payload;
      state.createActivity.error = false;
    },
    createActivityFailure(state) {
      state.createActivity.isFetching = false;
      state.createActivity.error = true;
    },

    createActivitiesStart(state) {
      state.createActivities.isFetching = true;
      state.createActivities.error = false;
    },
    createActivitiesSuccess(state, action) {
      state.createActivities.isFetching = false;
      state.createActivities.data = action.payload;
      state.createActivities.error = false;
    },
    createActivitiesFailure(state) {
      state.createActivities.isFetching = false;
      state.createActivities.error = true;
    },

    updateActivitiesStart(state) {
      state.updateActivities.isFetching = true;
      state.updateActivities.error = false;
    },
    updateActivitiesSuccess(state, action) {
      state.updateActivities.isFetching = false;
      state.updateActivities.data = action.payload;
      state.updateActivities.error = false;
    },
    updateActivitiesFailure(state) {
      state.updateActivities.isFetching = false;
      state.updateActivities.error = true;
    },

    activityDetailStart(state) {
      state.activityDetail.isFetching = true;
      state.activityDetail.error = false;
    },
    activityDetailSuccess(state, action) {
      state.activityDetail.isFetching = false;
      state.activityDetail.data = action.payload;
      state.activityDetail.error = false;
    },
    activityDetailFailure(state) {
      state.activityDetail.isFetching = false;
      state.activityDetail.error = true;
    },
  },
});
export const {
  createActivityStart,
  createActivitySuccess,
  createActivityFailure,
  createActivitiesStart,
  createActivitiesSuccess,
  createActivitiesFailure,
  updateActivitiesStart,
  updateActivitiesSuccess,
  updateActivitiesFailure,
  activityDetailStart,
  activityDetailSuccess,
  activityDetailFailure,
} = activitySlice.actions;

export default activitySlice.reducer;
