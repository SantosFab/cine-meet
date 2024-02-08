import axios, { AxiosResponse } from "axios";
import { configureStore } from "@reduxjs/toolkit";
import fetchReducer, { fetchMediaByGenre } from "./fetchMediaByGenre";
import { FetchData } from "../commonTypes/interface";
import {
  getSuccessResultPage1,
  getSuccessResultPage2,
} from "../../../../__test__/mock/dataMovies/dataMovies";
import { MediaByGenreState } from "./interface";

// Estende o objeto axios com as funções de mock
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const store = configureStore({
  reducer: {
    fetchData: fetchReducer,
  },
});

describe("fetchMediaByGenre async", () => {
  it("should fetch media by genre successfully", async () => {
    // Configuração correta do mockResolvedValue
    mockedAxios.get.mockResolvedValueOnce({
      data: getSuccessResultPage1,
    } as AxiosResponse<FetchData>);

    mockedAxios.get.mockResolvedValueOnce({
      data: getSuccessResultPage2,
    } as AxiosResponse<FetchData>);

    // Certifique-se de que está usando o store configurado
    await store.dispatch(fetchMediaByGenre({}));

    // Obtenha o estado após o dispatch
    let state = store.getState();

    // Agora você pode realizar as asserções sobre o estado do Redux
    expect(state.fetchData.data).toEqual(getSuccessResultPage1);

    // Chame novamente para a segunda página
    await store.dispatch(fetchMediaByGenre({}));

    // Obtenha o estado após o segundo dispatch
    state = store.getState();

    // Agora você pode realizar as asserções sobre o estado do Redux para a segunda página
    expect(state.fetchData.data).toEqual(getSuccessResultPage2);
  });

  it("should handle fetch failure", async () => {
    const errorMessage = "API error";
    mockedAxios.get.mockRejectedValue(new Error(errorMessage));

    // Certifique-se de que está usando o store configurado
    await store.dispatch(fetchMediaByGenre({}));

    // Obtenha o estado após o dispatch
    const state = store.getState();

    // Agora você pode realizar as asserções sobre o estado do Redux
    expect(state.fetchData.error).toEqual(errorMessage);
  });
});

describe("fetchMediaByGenre sync", () => {
  const initialState: MediaByGenreState = { data: null, error: undefined };

  it("should handle fetchData.fulfilled", () => {
    const action = {
      type: fetchMediaByGenre.fulfilled.type,
      payload: getSuccessResultPage1,
    };
    const state = fetchReducer(initialState, action);
    expect(state.data).toEqual(getSuccessResultPage1);
    expect(state.error).toBeUndefined();
  });

   test("should handle fetchData.rejected", () => {
    const action = {
      type: fetchMediaByGenre.rejected.type,
      error: { message: "Test error" },
    };
    const state = fetchReducer(initialState, action);
    expect(state.data).toBeNull();
    expect(state.error).toEqual("Test error");
  }); 
});
