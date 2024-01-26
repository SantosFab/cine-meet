import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiToken: string | undefined = process.env.REACT_APP_API_TOKEN;
const url: string = process.env.REACT_APP_API_URL_FETCH_SEARCH ?? "default_url";
const urlBaseImg: string | undefined = process.env.REACT_APP_API_URL_IMG_500W;

interface SearchParams {
  query?: string;
  page?: string;
}

export interface FetchSearchState {
  search: string;
  data: string | null;
  error: string | undefined;
  urlBaseImg: string | undefined;
}

const initialState: FetchSearchState = {
  search: "",
  data: null,
  error: undefined,
  urlBaseImg,
};

export const fetchSearch = createAsyncThunk(
  "fetchSearch",
  async (params: SearchParams) => {
    const response = await axios.get(url, {
      params: {
        query: params?.query ?? "",
        language: "pt-br",
        page: params?.page ?? "1",
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
  name: "fetchSearch",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = undefined;
    });
    builder.addCase(fetchSearch.rejected, (state, action) => {
      state.data = null;
      state.error = action.error.message;
    });
  },
});

export const { setInputValue } = fetchReducer.actions;
export default fetchReducer.reducer;
