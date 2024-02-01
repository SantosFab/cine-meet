import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { apiToken, urlBaseImg, urlSearch } from "../../../utils/env/env";
import { FetchData } from "../commonTypes/interface";
import { SearchState, SearchParams } from "./interface";
import { Accept, language } from "../../../utils/API/variable";

const initialState: SearchState = {
  data: null,
  error: undefined,
  search: "",
  urlBaseImg,
};

export const fetchSearch = createAsyncThunk<FetchData, SearchParams>(
  "fetchSearch",
  async ({ query, page = 1 }) => {
    const response = await axios(urlSearch, {
      params: {
        query,
        language,
        page,
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
  name: "fetchSearch",
  initialState,
  reducers: {
    setInputValue(state, action: PayloadAction<string>) {
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

export const selectStateSearch = (state: { fetchSearch: SearchState }) =>
  state.fetchSearch;
export const selectErrorSearch = (state: { fetchSearch: SearchState }) =>
  state.fetchSearch.error;

export const { setInputValue } = fetchReducer.actions;

export default fetchReducer.reducer;
