import axios, { AxiosResponse } from "axios";
import {
  getSuccessDetailMoviePage1,
  getSuccessDetailMoviePage2,
} from "../../../../__test__/mock/dataDetailMovie/dataDetailMovie";
import { DetailData, DetailState } from "./interface";
import { configureStore } from "@reduxjs/toolkit";
import fetchReducer, { fetchDetail } from "./fetchDetail";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchDetail async", () => {
  const store = configureStore({
    reducer: {
      fetchDetail: fetchReducer,
    },
  });

  const id: string = "1";

  it("should fetch detail sucessfully", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: getSuccessDetailMoviePage1,
    } as AxiosResponse<DetailData>);

    mockedAxios.get.mockResolvedValueOnce({
      data: getSuccessDetailMoviePage2,
    } as AxiosResponse<DetailData>);

    await store.dispatch(fetchDetail({ id }));

    let state = store.getState();

    expect(state.fetchDetail.data).toEqual(getSuccessDetailMoviePage1);

    await store.dispatch(fetchDetail({ id }));

    state = store.getState();

    expect(state.fetchDetail.data).toEqual(getSuccessDetailMoviePage2);
  });

  it("should fetch detail failure", async () => {
    const errorMessage = "API error";

    mockedAxios.get.mockRejectedValue(new Error(errorMessage));

    await store.dispatch(fetchDetail({ id }));

    const state = store.getState();

    expect(state.fetchDetail.error).toEqual(errorMessage);
  });
});

describe("fetchDetail sync", () => {
  const initialState: DetailState = { data: null, error: undefined };

  it("should handle fetchDetail.fulfilled", () => {
    const action = {
      type: fetchDetail.fulfilled.type,
      payload: getSuccessDetailMoviePage1,
    };
    const state = fetchReducer(initialState, action);
    expect(state.data).toEqual(getSuccessDetailMoviePage1);
    expect(state.error).toBeUndefined();
  });

  it("should handle fetchDetail.reject", () => {
    const errorMessage: string = "Test error";

    const action = {
      type: fetchDetail.rejected.type,
      error: { message: errorMessage },
    };

    const state = fetchReducer(initialState, action);

    expect(state.data).toBeNull();
    expect(state.error).toEqual(errorMessage);
  });
});
