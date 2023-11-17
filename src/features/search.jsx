import { createSlice } from "@reduxjs/toolkit";

export const inputValue = createSlice({
  name: "search",
  initialState: {
    value: "",
  },
  reducers: {
    setInputValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { setInputValue } = inputValue.actions;

export default inputValue.reducer;
