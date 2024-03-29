import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey, apiToken, urlMovies } from "../../../utils/env/env";
import { MediaByGenreParams, MediaByGenreState } from "./interface";
import axios from "axios";
import { Accept, language } from "../../../utils/API/variable";
import { FetchData } from "../commonTypes/interface";

const initialState: MediaByGenreState = {
  data: null,
  error: undefined,
};

export const fetchMediaByGenre = createAsyncThunk<
  FetchData,
  MediaByGenreParams
>("fetchMediaByGenre", async ({ page, genre }) => {
  const response = await axios.get(urlMovies, {
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
});

const fetchReducer = createSlice({
  name: "fetchMediaByGenre",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMediaByGenre.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = undefined;
    });
    builder.addCase(fetchMediaByGenre.rejected, (state, action) => {
      state.data = null;
      state.error = action.error.message;
    });
  },
});

export const selectStateMediaByGenre = (state: {
  fetchData: MediaByGenreState;
}) => state.fetchData;
export const selectErrorMediaByGenre = (state: {
  fetchData: MediaByGenreState;
}) => state.fetchData.error;
export default fetchReducer.reducer;
