import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlMovies = process.env.REACT_APP_API_URL_FETCH_MOVIES;
const urlSeries = process.env.REACT_APP_API_URL_FETCH_SERIES;
const apiKey = process.env.REACT_APP_API_KEY;
const apiToken = process.env.REACT_APP_API_TOKEN;
const urlBaseImg = process.env.REACT_APP_API_URL_IMG_500W;

export const fetchData = createAsyncThunk(
  "fetchMovies/fetchData",
  async (params) => {
    const response = await axios.get(params.isSeries ? urlSeries : urlMovies, {
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
  name: "fetchData",
  initialState: {
    data: null,
    error: null,
    urlBaseImg,
    isSerie: false,
  },
  reducers: {
    setIsSerie: (state, action) => {
      state.isSerie = action.payload;
    },
  },
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

export const { setIsSerie } = fetchReducer.actions;
export default fetchReducer.reducer;
