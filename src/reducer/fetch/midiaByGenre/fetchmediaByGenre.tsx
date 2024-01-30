import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiKey,
  apiToken,
  urlBaseImg,
  urlMovies,
  urlSeries,
} from "../../../utils/env/env";

import axios from "axios";
import { Accept, language } from "../../../utils/API/variable";
import {
  MediaByGenreData,
  MediaByGenreParams,
  MediaByGenreState,
} from "../mediasByGenre/interface";

const initialState: MediaByGenreState = {
  data: null,
  error: undefined,
  search: "",
  urlBaseImg,
};

export const fetchData = createAsyncThunk<MediaByGenreData, MediaByGenreParams>(
  "fetchdata",
  async ({ isSeries = false, page, genre }) => {
    const response = await axios.get(isSeries ? urlSeries : urlMovies, {
      params: {
        language,
        page: page ?? "1",
        sort_by: "popularity.desc",
        with_genres: genre ?? "",
        api_key: apiKey,
      },
      headers: {
        Accept,
        Authorization: apiToken,
      },
    });
    return response.data;
  }
);

const fetchReducer = createSlice({
  name: "fetchData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = undefined;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.data = null;
      state.error = action.error.message;
    });
  },
});

export const selectState = (state: { fetchData: MediaByGenreState }) =>
  state.fetchData;
export const selectError = (state: { fetchData: MediaByGenreState }) =>
  state.fetchData.error;
export default fetchReducer.reducer;
