import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/CounterSlice";
import userReduser from "./slices/UserSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReduser,
  },
});
