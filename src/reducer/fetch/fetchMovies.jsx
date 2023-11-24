import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_API_URL_FETCH_MOVIES;
const apiKey = process.env.REACT_APP_API_KEY;
const apiToken = process.env.REACT_APP_API_TOKEN;
const urlBaseImg = process.env.REACT_APP_API_URL_IMG_500W;

console.log(url);

export const fetchMovies = createAsyncThunk(
  "fetchMovies/fetchData",
  async (params) => {
    const response = await axios.get(url, {
      params: {
        language: "pt-BR",
        page: params?.page ?? "1",
        sort_by: "popularity.desc",
        with_genres: params?.genre ?? "",
        api_key: apiKey,
      },
      headers: {
        accept: "application/json",
        Authorization: apiToken,
      },
    });
    return response.data;
  }
);

const fetchReducer = createSlice({
  name: "fetchMovies",
  initialState: {
    data: null,
    error: null,
    urlBaseImg,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.data = null;
      state.error = action.error.message;
    });
  },
});

export default fetchReducer.reducer;
