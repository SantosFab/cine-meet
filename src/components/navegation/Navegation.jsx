import Pagination from "react-bootstrap/Pagination";
import { useSelector } from "react-redux";

function Navegation(props) {
  const currentPage = useSelector((state) => state.fetch.data?.page);
  const isFiveHundred = useSelector((state) => state.fetch.data?.total_pages);
  const totalPage = isFiveHundred < 500 ? isFiveHundred : 500;
  const urlLocation = props.urlLocation;
  const urlDefault = "Page";

  function PaginatioItem(selectedPage) {
    return (
      <>
        <Pagination.Item
          href={`/${urlLocation === "" ? urlDefault : urlLocation}/${
            selectedPage - 2
          }`}
          active={currentPage === selectedPage - 2}
        >
          {selectedPage - 2}
        </Pagination.Item>
        <Pagination.Item
          href={`/${urlLocation === "" ? urlDefault : urlLocation}/${
            selectedPage - 1
          }`}
          active={currentPage === selectedPage - 1}
        >
          {selectedPage - 1}
        </Pagination.Item>
        <Pagination.Item
          href={`/${
            urlLocation === "" ? urlDefault : urlLocation
          }/${selectedPage}`}
          active={currentPage === selectedPage}
        >
          {selectedPage}
        </Pagination.Item>
        <Pagination.Item
          href={`/${urlLocation === "" ? urlDefault : urlLocation}/${
            selectedPage + 1
          }`}
          active={currentPage === selectedPage + 1}
        >
          {selectedPage + 1}
        </Pagination.Item>
        <Pagination.Item
          href={`/${urlLocation === "" ? urlDefault : urlLocation}/${
            selectedPage + 2
          }`}
          active={currentPage === selectedPage + 2}
        >
          {selectedPage + 2}
        </Pagination.Item>
      </>
    );
  }

  return (
    <>
      <Pagination className="d-flex justify-content-center">
        <Pagination.First
          href={`/${urlLocation === urlDefault ? "" : urlLocation}`}
        />
        {currentPage <= 3 ? PaginatioItem(3) : <></>}
        {currentPage > 3 && totalPage - currentPage > 2 ? (
          PaginatioItem(currentPage)
        ) : (
          <></>
        )}
        {currentPage > 3 && totalPage - currentPage < 3 ? (
          PaginatioItem(totalPage - 2)
        ) : (
          <></>
        )}
        <Pagination.Last
          href={`/${
            urlLocation === "" ? urlDefault : urlLocation
          }/${totalPage}`}
        />
      </Pagination>
    </>
  );
}

export default Navegation;
