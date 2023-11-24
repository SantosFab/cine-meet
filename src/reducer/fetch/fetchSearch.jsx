import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiToken = process.env.REACT_APP_API_TOKEN;
const url = process.env.REACT_APP_API_URL_FETCH_SEARCH;
const urlBaseImg = process.env.REACT_APP_API_URL_IMG_500W;

export const fetchSearch = createAsyncThunk(
  "fetchSearch/fetchData",
  async (params) => {
    const response = await axios.get(url, {
      params: {
        query: params?.query ?? "",
        include_adult: params?.adult ?? "false",
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
  initialState: {
    value: "",
    data: null,
    error: null,
    urlBaseImg,
  },
  reducers: {
    setInputValue: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchSearch.rejected, (state, action) => {
      state.data = null;
      state.error = action.error.message;
    });
  },
});

export const { setInputValue } = fetchReducer.actions;
export default fetchReducer.reducer;
