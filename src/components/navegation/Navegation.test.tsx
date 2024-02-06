import { render } from "@testing-library/react";
import Navegation from "./Navegation";

describe("Navegation Component", () => {
  const NavegationProps = {
    currentPageString: "3",
    lastPage: 10,
    urlLocation: "example",
  };

  it("should renders firstTerm", () => {
    const { getByText } = render(<Navegation {...NavegationProps} />);

    const firstPageLink = getByText("1");
    expect(firstPageLink).toHaveAttribute("href", "/example/1");
    expect(firstPageLink).not.toBeDisabled();
  });

  it("should renders currentPage with active", () => {
    const { getByText } = render(<Navegation {...NavegationProps} />);

    const currentPage = getByText("3");
    expect(currentPage).toBeInTheDocument();
    expect(currentPage.parentElement).toHaveClass("active");
  });

  it("should renders lastTerm", () => {
    const { getByText } = render(<Navegation {...NavegationProps} />);

    const lastPageLink = getByText("5");
    expect(lastPageLink).toHaveAttribute("href", "/example/5");
    expect(lastPageLink).not.toBeDisabled();
  });

  it("should renders has Ellipsis", () => {
    const { getByText } = render(<Navegation {...NavegationProps} />);

    const ellipsis = getByText("…");
    expect(ellipsis).toBeInTheDocument();
  });
});
