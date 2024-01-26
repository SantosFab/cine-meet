import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlMovies: string =
  process.env.REACT_APP_API_URL_FETCH_MOVIES ?? "default_url";
const urlSeries: string =
  process.env.REACT_APP_API_URL_FETCH_SERIES ?? "default_url";
const apiKey = process.env.REACT_APP_API_KEY;
const apiToken = process.env.REACT_APP_API_TOKEN;
const urlBaseImg = process.env.REACT_APP_API_URL_IMG_500W ?? "default_url";

interface PageData {
  page: number;
  results: Array<{
    id: number;
    title: string;
    media_type: string;
    name: string;
    poster_path: string;
    overview: string;
  }>;
  total_pages: number;
  total_results: number;
}

interface DataParams {
  isSeries?: boolean;
  page?: string;
  genre?: string;
}

export interface FetchDataState {
  data: PageData | null;
  error: string | undefined;
  urlBaseImg: string;
}

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
