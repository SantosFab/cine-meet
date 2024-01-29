import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  FetchState,
  PageData,
  initialState,
} from "../commonTypes/interface";
import { apiToken, urlDetail } from "../../../utils/env/env";
import { DetailParams } from "./interface";
import { Accept, language } from "../../../utils/API/variable";

const fetchDetail = createAsyncThunk<PageData, DetailParams>(
  "fetchDetail",
  async ({ id, type }) => {
    const response = await axios.get(`${urlDetail}/${type}/${id}`, {
      params: {
        language,
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
  name: "fetchDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = undefined;
    });
    builder.addCase(fetchDetail.rejected, (state, action) => {
      state.data = null;
      state.error = action.error.message;
    });
  },
});

export const selectState = (state: { fetchDetail: FetchState }) =>
  state.fetchDetail;
export const selectError = (state: { fetchDetail: FetchState }) =>
  state.fetchDetail.error;
export default fetchReducer.reducer;
