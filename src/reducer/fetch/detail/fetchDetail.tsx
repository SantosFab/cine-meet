import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiToken, urlBaseImg, urlDetail } from "../../../utils/env/env";
import { DetailData, DetailParams, DetailState } from "./interface";
import { Accept, language } from "../../../utils/API/variable";

const initialState: DetailState = {
  data: null,
  error: undefined,
  urlBaseImg,
};

export const fetchDetail = createAsyncThunk<DetailData, DetailParams>(
  "fetchDetail",
  async ({ id, type }) => {
    const response = await axios.get(`${urlDetail}${type}/${id}`, {
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

export const selectStateDetail = (state: { fetchDetail: DetailState }) =>
  state.fetchDetail;
export const selectErrorDetail = (state: { fetchDetail: DetailState }) =>
  state.fetchDetail.error;
export default fetchReducer.reducer;
