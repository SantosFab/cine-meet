import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiToken, urlBaseImg, urlSearch } from "../../../utils/env/env";
import { FetchSearchState, SearchParams } from "./interface";
import axios from "axios";

const initialState: FetchSearchState = {
  search: "",
  data: null,
  error: undefined,
  urlBaseImg,
};

export const fetchSearch = createAsyncThunk(
  "fetchSearch",
  async (params: SearchParams) => {
    const response = await axios.get(urlSearch, {
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
