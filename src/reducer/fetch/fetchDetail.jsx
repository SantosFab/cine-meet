import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiToken = process.env.REACT_APP_API_TOKEN;
const url = process.env.REACT_APP_API_URL_FETCH_DETAIL;
const urlBaseImg = process.env.REACT_APP_API_URL_IMG_ORGINAL;

export const fetchDetail = createAsyncThunk(
  "fetchDetail/fetchData",
  async (id) => {
    const response = await axios.get(url + id, {
      params: {
        language: "pt-BR",
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
  name: "fetchDetail",
  initialState: {
    data: null,
    error: null,
    urlBaseImg,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchDetail.rejected, (state, action) => {
      state.data = null;
      state.error = action.error.message;
    });
  },
});

export default fetchReducer.reducer;
