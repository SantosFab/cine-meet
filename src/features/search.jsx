import { createSlice } from "@reduxjs/toolkit";

export const inputValue = createSlice({
  name: "search",
  initialState: {
    value: '',
  },
  reducers: {
    increment: (state, number) => {
        console.log()
      state.value += 1 + number.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setInputValue: (state, action) => {
      console.log(action.payload)
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, setInputValue } = inputValue.actions;

export default inputValue.reducer;
