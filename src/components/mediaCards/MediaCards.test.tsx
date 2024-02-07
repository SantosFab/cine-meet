import { mockResult } from "../../../__test__/mock/mockResults";
import { renderRouter } from "../../../__test__/ProviderRouter/renderRouter";
import MediaCards from "./MediaCards";

describe("Component MediaCards ", () => {
  it("should test", () => {
    const { getByText, getByAltText } = renderRouter(
      <MediaCards results={mockResult} />
    );

    const imgElement = getByAltText("Imagem de Alexa do Pixabay") as HTMLImageElement;

    expect(getByText("Beekeeper - Rede de Vingança")).toBeInTheDocument();
    expect(getByText("Um jovem Willy Wonka embarca em uma missão para...")
    ).toBeInTheDocument();
    expect(getByText("Não há descrição")).toBeInTheDocument();
    expect(imgElement.className).toBe("card-img-top imageDefault");
  });
});
