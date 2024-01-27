import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiKey,
  apiToken,
  urlBaseImg,
  urlMovies,
  urlSeries,
} from "../../../utils/env/env";
import { DataParams, FetchDataState, PageData } from "./interface";
import axios from "axios";

const initialState: FetchDataState = {
  data: null,
  error: undefined,
  urlBaseImg,
};

export const fetchData = createAsyncThunk<PageData, DataParams>(
  "fetchdata",
  async ({ isSeries = false, page, genre }) => {
    const response = await axios.get(isSeries ? urlSeries : urlMovies, {
      params: {
        language: "pt-BR",
        page: page ?? "1",
        sort_by: "popularity.desc",
        with_genres: genre ?? "",
        api_key: apiKey,
      },
      headers: {
        Accept: "application/json",
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

export default fetchReducer.reducer;
