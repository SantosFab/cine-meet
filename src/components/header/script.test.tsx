import { useNavigate } from "react-router-dom";
import { isForBrowsing } from "./script";
import { useDispatch } from "react-redux";

describe("isForBrowsing function", () => {
  interface MockFunction {
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
    search?: string;
    navigate?: ReturnType<typeof useNavigate>;
    dispatch?: ReturnType<typeof useDispatch>;
  }

  const eventMock = {
    preventDefault: jest.fn(),
  } as unknown as React.MouseEvent<HTMLButtonElement, MouseEvent>;

  const navigateMock = jest.fn();
  const dispatchMock = jest.fn();

  const createMockData = (overrides: MockFunction = {}) => ({
    event: eventMock,
    search: "",
    navigate: navigateMock,
    dispatch: dispatchMock,
    ...overrides,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("dispatches setInputValue and navigates when search is not empty", () => {
    // Ajuste do tipo para React.MouseEvent<HTMLButtonElement, MouseEvent>

    const mock = createMockData({ search: "Test Search" });
    // Test when search is not empty
    isForBrowsing(mock);

    // Verifica se a ação foi despachada corretamente
    expect(dispatchMock).toHaveBeenCalledWith({
      type: "fetchSearch/setInputValue",
      payload: "",
    });

    // Verifica se a função de navegação foi chamada com o caminho esperado
    expect(navigateMock).toHaveBeenCalledWith("/SearchMovies/test-search/1");

    // Verifica se preventDefault foi chamado
    expect(eventMock.preventDefault).toHaveBeenCalled();
  });

  it("does not dispatch setInputValue or navigate when search is empty", () => {
    const mockData = createMockData({ search: "" });

    isForBrowsing(mockData);

    // Verifica se a ação não foi despachada quando a pesquisa está vazia
    expect(dispatchMock).not.toHaveBeenCalled();

    // Verifica se a função de navegação não foi chamada quando a pesquisa está vazia
    expect(navigateMock).not.toHaveBeenCalled();

    // Verifica se preventDefault foi chamado
    expect(eventMock.preventDefault).toHaveBeenCalled();
  });
});
