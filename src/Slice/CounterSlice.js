import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    singleProductData: (state, action) => {
      state.value = action.payload;
      console.log(action);
    },
  },
});

export const { singleProductData } = counterSlice.actions;

export default counterSlice.reducer;
