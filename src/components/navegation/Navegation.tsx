import { FunctionComponent } from "react";
import { Pagination } from "react-bootstrap";
import {
  generatePaginationItems,
  isLessThanFiveHundred,
  isNumber,
} from "./script";


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
  const Location = urlLocation === "" ? "Page" : urlLocation;
  const isFiveHundred = isLessThanFiveHundred({ number: lastPage });

  return (
    <Pagination className="d-flex justify-content-center">
      <Pagination.First href={`/${Location === "Page" ? "" : Location}`} />
      {currentPage > 3 && isFiveHundred > 5 && <Pagination.Ellipsis disabled />}
      {generatePaginationItems({
        urlLocation: Location,
        currentPage,
        lastPage: isFiveHundred,
      })}
      {currentPage < isFiveHundred - 2 && isFiveHundred > 5 && (
        <Pagination.Ellipsis disabled />
      )}
      <Pagination.Last href={`/${Location}/${isFiveHundred}`} />
    </Pagination>
  );
};

export default Navegatin;