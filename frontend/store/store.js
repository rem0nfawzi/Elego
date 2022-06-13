import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import contestsReducer from "./contest/contest";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contests: contestsReducer,
  },
});
