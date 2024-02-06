import {
  generatePaginationItems,
  isLessThanFiveHundred,
  isNumber,
} from "./script";

describe("Script of the Navegation", () => {
  it("should GeneratePaginationItems with 10 pages", () => {
    const generatePaginationItemsProps = {
      urlLocation: "exemplo",
      lastPage: 10,
      currentPage: 3,
    };

    const result = generatePaginationItems(generatePaginationItemsProps);
    expect(result).toHaveLength(5);
  });

  it("should GeneratePaginationItems with 2 pages", () => {
    const generatePaginationItemsProps = {
      urlLocation: "exemplo",
      lastPage: 2,
      currentPage: 1,
    };

    const result = generatePaginationItems(generatePaginationItemsProps);
    expect(result).toHaveLength(2);
  });

  it("should isLessThanFiveHundred total pages is 300", () => {
    const isLessThanFiveHundredProps = {
      number: 300,
    };
    const result = isLessThanFiveHundred(isLessThanFiveHundredProps);
    expect(result).toBe(300);
  });

  it("should isLessThanFiveHundred total pages is greater than 500", () => {
    const isLessThanFiveHundredProps = {
      number: 600,
    };
    const result = isLessThanFiveHundred(isLessThanFiveHundredProps);
    expect(result).toBe(500);
  });

  it("should isNumber it's not a number", () => {
    const isNumberProps = {
      isNumber: "invalid",
    };
    const result = isNumber(isNumberProps);
    expect(result).toBe(1);
  });

  it("should isNumber it's number", () => {
    const isNumberProps = {
      isNumber: "150",
    };
    const result = isNumber(isNumberProps);
    expect(result).toBe(150);
  });
});
