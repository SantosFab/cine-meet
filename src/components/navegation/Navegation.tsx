import { FunctionComponent } from "react";
import { Pagination } from "react-bootstrap";
import { generatePaginationItems, isNumber } from "./script";
import { current } from "@reduxjs/toolkit";

interface NavegatinProps {
  currentPageString: string | undefined;
  lastPage: number;
  urlLocation: string;
}

const Navegatin: FunctionComponent<NavegatinProps> = ({
  currentPageString,
  lastPage,
  urlLocation,
}) => {
  const currentPage = isNumber({ isNumber: currentPageString });

  return (
    <Pagination className="d-flex justify-content-center">
      <Pagination.First
        href={`/${urlLocation === "Page" ? "" : urlLocation}`}
      />
      {currentPage > 3 && lastPage > 5 && <Pagination.Ellipsis disabled />}
      {generatePaginationItems({ urlLocation, currentPage, lastPage })}
      {currentPage < lastPage - 2 && lastPage > 5 && (
        <Pagination.Ellipsis disabled />
      )}
      <Pagination.Last href={`/${urlLocation}/${lastPage}`} />
    </Pagination>
  );
};

export default Navegatin;
