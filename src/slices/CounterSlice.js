import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    changeValue: (state, { payload }) => {
      state.value = +payload;
    },
  },
});
export const { increment, decrement, changeValue } = counterSlice.actions;
export default counterSlice.reducer;
