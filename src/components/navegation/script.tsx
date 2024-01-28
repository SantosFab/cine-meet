import { Pagination } from "react-bootstrap";

export const generatePaginationItems = ({
  urlLocation,
  lastPage,
  currentPage,
}: {
  urlLocation: string;
  lastPage: number;
  currentPage: number;
}): JSX.Element[] => {
  let items: JSX.Element[] = [];

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(lastPage, startPage + 4);

  for (let page = startPage; page <= endPage; page++) {
    items = [
      ...items,
      <Pagination.Item
        key={page}
        href={`/${urlLocation}/${page}`}
        active={currentPage === page}
      >
        {page}
      </Pagination.Item>,
    ];
  }

  return items;
};

export const isNumber = ({
  isNumber,
}: {
  isNumber: string | undefined;
}): number => {
  const number: number = parseInt(isNumber ?? "NotNumber");
  if (isNaN(number)) {
    return 1;
  } else {
    return number;
  }
};

export const isLessThanFiveHundred = ({ number }: { number: number }): number =>
  Math.min(number, 500);
