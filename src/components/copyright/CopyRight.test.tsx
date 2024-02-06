import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CopyRight from "./CopyRight";

describe("Compoment CopyRight - test", () => {
  it("renders copyright information", () => {
    const { getByText } = render(<CopyRight />);

    expect(getByText(/Image by/i)).toBeInTheDocument();
    expect(getByText(/Alexa/i)).toBeInTheDocument();
    expect(getByText(/from/i)).toBeInTheDocument();
    expect(getByText(/Pixabay/i)).toBeInTheDocument();
  });
});
