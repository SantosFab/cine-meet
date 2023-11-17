import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
/*  está funcionando certinho  */
const apiKey = process.env.REACT_APP_API_KEY;
const apiToken = process.env.REACT_APP_API_TOKEN;

console.log("API Key:", apiKey);
console.log("API Token:", apiToken);

export const fetchData = createAsyncThunk(
  "fetch/fetchData",
  async (parametro1) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`,
      {
        params: {
          language: "pt-BR",
          page: "1",
          sort_by: "popularity.desc",
          api_key: apiKey,
        },
        headers: {
          accept: "application/json",
          Authorization: apiToken,
        },
      }
    );
    console.log(response.data);
    return response.data;
  }
);

const fetchReducer = createSlice({
  name: "fetch",
  initialState: {
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.data = null;
      state.error = action.error.message;
    });
  },
});

export default fetchReducer.reducer;
