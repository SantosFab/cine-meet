import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const apiToken = process.env.REACT_APP_API_TOKEN;

export const fetchData = createAsyncThunk(
  "fetchMovies/fetchData",
  async (params) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`,
      {
        params: {
          language: "pt-BR",
           page: params?.page ?? '1',
          sort_by: "popularity.desc",
          with_genres: params?.genre ?? '',
          api_key: apiKey,
        },
        headers: {
          accept: "application/json",
          Authorization: apiToken,
        },
      }
    );
    return response.data;
  }
);

const fetchReducer = createSlice({
  name: "fetchMovies",
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
