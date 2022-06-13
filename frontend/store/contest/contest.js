import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";
import Router from "next/router";

export const createContest = createAsyncThunk(
  "Create-Contest",
  async contest => {
    const payload = {
      data: { ...contest },
    };
    const response = await api({
      endpoint: "/api/contests",
      payload,
      isAuth: true,
    });
    console.log("RE", response);
    return response;
  }
);

export const getContests = createAsyncThunk("Get-Contests", async () => {
  // const payload = {
  //   data: { ...contest },
  // };
  console.log("H");
  const response = await api({
    method: "GET",
    endpoint: "/api/contests",
    // payload,
    isAuth: true,
  });
  console.log("RE", response);
  return response;
});

const initialState = {
  contests: [],
  loading: false,
};

export const contestSlice = createSlice({
  name: "contests",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getContests.fulfilled, (state, action) => {
      state.contests = action.payload.data;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { createContest } = authSlice.actions;

export default contestSlice.reducer;
