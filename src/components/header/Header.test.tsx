import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";

const mockStore = configureStore();

describe("Header Component", () => {
  const store = mockStore({});

  const renderHeader = (store: MockStoreEnhanced<unknown, {}>) => {
    return render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
  };

  it("should renders without crashing", () => {
    const { getByText } = renderHeader(store);
    expect(getByText("CineMeet")).toBeInTheDocument();
    expect(getByText("Ação")).toBeInTheDocument();
  });

   it("should dispatches search action", async () => {
    const value: string = "Test Search";

    const { getByPlaceholderText } = renderHeader(store);

    const searchInput = getByPlaceholderText("Pesquisar") as HTMLInputElement;

    // Verifica se o input está inicialmente vazio
    expect(searchInput.value).toBe("");

    fireEvent.change(searchInput, { target: { value } });

    // Aguarda até que a renderização seja concluída e as ações sejam processadas
    await waitFor(() => {
      // Verifica se a ação foi despachada corretamente
      expect(store.getActions()).toEqual([
        {
          type: "fetchSearch/setInputValue",
          payload: value,
        },
      ]);

      // Verifica se o valor do input foi atualizado
      expect(searchInput.value).toBe(value);
    });
  }); 

  it("should dispatch search action with initial search value by clicking button", async () => {
    const value:string = 'test'

    const initialState = {
      fetchSearch: {
        search: value, // Initial search value
      },
    };

    const store = mockStore(initialState);

    const { getByPlaceholderText, getByLabelText } = renderHeader(store);

    const searchInput = getByPlaceholderText("Pesquisar") as HTMLInputElement;

    // Verifica se o input está com estado inicial
    expect(searchInput.value).toBe(value);

    const searchButton = getByLabelText("Search");
    fireEvent.click(searchButton);

    await waitFor(() => {
      // Verifica se a ação foi despachada corretamente
      expect(store.getActions()).toEqual([
        {
          type: "fetchSearch/setInputValue",
          payload: "",
        },
      ]);
    });
  });
});
