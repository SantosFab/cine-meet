import { render } from "@testing-library/react";
import CopyRight from "./tempFile";

describe("Compoment CopyRight", () => {
  it("should renders copyright information", () => {
    const { getByText } = render(<CopyRight />);

    expect(getByText(/Image by/i)).toBeInTheDocument();
    expect(getByText(/Alexa/i)).toBeInTheDocument();
    expect(getByText(/from/i)).toBeInTheDocument();
    expect(getByText(/Pixabay/i)).toBeInTheDocument();
  });
});
