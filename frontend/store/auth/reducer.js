import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const registerUser = createAsyncThunk("Register-User", async user => {
  const payload = {
    email: user.email,
    password: user.password,
    username: user.email,
  };

  const response = await api({
    endpoint: "/api/auth/local/register",
    payload,
  });
  return response;
});

export const login = createAsyncThunk("Login", async user => {
  const payload = {
    identifier: user.email,
    password: user.password,
  };
  const response = await api({
    endpoint: "/api/auth/local",
    payload,
  });
  return response;
});

const initialState = {
  loading: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUser.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload) {
        state.user = null;
        state.error = {
          message: "Server error, Please try again",
        };
      } else if (action.payload.user) {
        state.user = action.payload.user;
        document.cookie = `auth=${action.payload.jwt}`;
      } else {
        state.error = action.payload;
      }
    });
    builder.addCase(login.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload) {
        state.user = null;
        state.error = {
          message: "Server error, Please try again",
        };
      } else if (action.payload.user) {
        state.user = action.payload.user;
        document.cookie = `auth=${action.payload.jwt}`;
      } else {
        state.error = action.payload;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const { setLoading } = authSlice.actions;

export default authSlice.reducer;
