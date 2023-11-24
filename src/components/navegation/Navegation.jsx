import React from "react";
import Pagination from "react-bootstrap/Pagination";

function Navigation(props) {
  const currentPage = props.currentPage;
  const totalPage = props.totalPage;
  const urlLocation = props.urlLocation || "Page";
  
  function generatePaginationItems() {
    const items = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPage, startPage + 4);

    for (let page = startPage; page <= endPage; page++) {
      items.push(
        <Pagination.Item
          key={page}
          href={`/${urlLocation}/${page}`}
          active={currentPage === page}
        >
          {page}
        </Pagination.Item>
      );
    }

    return items;
  }

  return (
    <Pagination className="d-flex justify-content-center">
      <Pagination.First
        href={`/${urlLocation === "Page" ? "" : urlLocation}`}
      />
      {currentPage > 3 && totalPage > 5 && <Pagination.Ellipsis disabled />}
      {generatePaginationItems()}
      {currentPage < totalPage - 2 && totalPage > 5 && (
        <Pagination.Ellipsis disabled />
      )}
      <Pagination.Last
        href={`/${urlLocation}/${totalPage}`}
      />
    </Pagination>
  );
}

export default Navigation;
