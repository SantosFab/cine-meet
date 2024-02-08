import axios, { AxiosResponse } from "axios";
import { configureStore } from "@reduxjs/toolkit";
import fetchReducer, { fetchSearch, setInputValue } from "./fetchSearch";
import { FetchData } from "../commonTypes/interface";
import {
  getSuccessResultPage1,
  getSuccessResultPage2,
} from "../../../../__test__/mock/dataMovies/dataMovies";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchSearch async", () => {
  const store = configureStore({
    reducer: {
      fetchSearch: fetchReducer,
    },
  });
  
  const query:string = 'test'

  it("should fetch media by genre successfully", async () => {
    

    mockedAxios.get.mockResolvedValueOnce({
      data: getSuccessResultPage1,
    } as AxiosResponse<FetchData>);

    mockedAxios.get.mockResolvedValueOnce({
      data: getSuccessResultPage2,
    } as AxiosResponse<FetchData>);

    await store.dispatch(fetchSearch({ query }));

    let state = store.getState();

    expect(state.fetchSearch.data).toEqual(getSuccessResultPage1);

    await store.dispatch(fetchSearch({ query }));

    state = store.getState();

    expect(state.fetchSearch.data).toEqual(getSuccessResultPage2);
  });
  it("should fetch search failure", async () => {
    const errorMessage = "API error";

    mockedAxios.get.mockRejectedValue(new Error(errorMessage));

    await store.dispatch(fetchSearch({ query }));

    const state = store.getState();

    expect(state.fetchSearch.error).toEqual(errorMessage);
  });
});

describe("fetchSearch sync", () => {
  const initialState = { data: null, error: undefined, search: "" };

  it("should handle setInputValue", () => {
    const action = setInputValue("test");
    const state = fetchReducer(initialState, action);
    expect(state.search).toEqual("test");
  });

  it("should handle fetchSearch.fulfilled", () => {
    const action = {
      type: fetchSearch.fulfilled.type,
      payload: getSuccessResultPage1,
    };
    const state = fetchReducer(initialState, action);
    expect(state.data).toEqual(getSuccessResultPage1);
    expect(state.error).toBeUndefined();
  });

  it("should handle fetchSearch.rejected", () => {
    const errorMessage: string = "Test error";

    const action = {
      type: fetchSearch.rejected.type,
      error: { message: errorMessage },
    };
    const state = fetchReducer(initialState, action);
    expect(state.data).toBeNull();
    expect(state.error).toEqual(errorMessage);
  });
});
