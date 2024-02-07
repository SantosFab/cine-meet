import axios, { AxiosResponse } from "axios";
import { configureStore } from "@reduxjs/toolkit";
import fetchReducer, { fetchMediaByGenre } from "./fetchMediaByGenre";
import { mockResult, mockResultAnimacao } from "../../../../__test__/mock/mockResults";
import { FetchData } from "../commonTypes/interface";

// Estende o objeto axios com as funções de mock
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const store = configureStore({
  reducer: {
    fetchData: fetchReducer,
  },
});

beforeEach(() => {
  jest.resetAllMocks();
});

describe("fetchMediaByGenre", () => {
  it("should fetch media by genre successfully", async () => {
    const getSuccessResultPage1 = {
      page: 1,
      results: mockResult,
      total_pages: 2,
      total_results: 5,
    };

    const getSuccessResultPage2 = {
      page: 2,
      results: mockResultAnimacao,
      total_pages: 2,
      total_results: 5,
    };

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
    await store.dispatch(fetchMediaByGenre({  }));

    // Obtenha o estado após o dispatch
    const state = store.getState();

    // Agora você pode realizar as asserções sobre o estado do Redux
    expect(state.fetchData.error).toEqual(errorMessage);
  });
});
