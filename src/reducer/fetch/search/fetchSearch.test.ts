import axios, { AxiosResponse } from "axios";
import { configureStore } from "@reduxjs/toolkit";
import fetchReducer, { fetchSearch } from "./fetchSearch";
import { FetchData } from "../commonTypes/interface";
import {
  getSuccessResultPage1,
  getSuccessResultPage2,
} from "../../../../__test__/mock/fetchGenre/fetchGenre";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const store = configureStore({
  reducer: {
    fetchSearch: fetchReducer,
  },
});

describe("fetchSearch", () => {
  it("should fetch media by genre successfully", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: getSuccessResultPage1,
    } as AxiosResponse<FetchData>);

    mockedAxios.get.mockResolvedValueOnce({
      data: getSuccessResultPage2,
    } as AxiosResponse<FetchData>);

    await store.dispatch(fetchSearch({ query: "test" }));

    let state = store.getState();

    expect(state.fetchSearch.data).toEqual(getSuccessResultPage1);

    await store.dispatch(fetchSearch({ query: "test" }));

    state = store.getState();

    expect(state.fetchSearch.data).toEqual(getSuccessResultPage2);
  });
  it("should fetch search failure", async () => {
    const errorMessage = "API error";

    mockedAxios.get.mockRejectedValue(new Error(errorMessage));

    await store.dispatch(fetchSearch({ query: "" }));

    const state = store.getState();

    expect(state.fetchSearch.error).toEqual(errorMessage);
  });
});
