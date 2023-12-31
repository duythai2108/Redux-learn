import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => ({
      ...state,
      count: state.count + 1,
    }),
    decrement: (state) => ({
      ...state,
      count: state.count - 1,
    }),
    incrementbyvalue: (state, { payload }) => ({
      ...state,
      count: state.count + payload,
    }),
  },
});
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementbyvalue } = counterSlice.actions;

export default counterSlice.reducer;
