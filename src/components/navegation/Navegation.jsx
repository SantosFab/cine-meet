import Pagination from "react-bootstrap/Pagination";
import { useSelector } from "react-redux";

function Navegation(props) {
  const currentPage = useSelector((state) => state.fetch.data?.page);
  const urlLocation = props.urlLocation;
  const urlDefault = "Page";

  return (
    <>
      <Pagination className="d-flex justify-content-center">
        <Pagination.First
          href={`/${urlLocation === urlDefault ? "" : urlLocation}`}
        />
        <Pagination.Item
          href={`/${urlLocation === "" ? urlDefault : urlLocation}`}
        >
          {1}
        </Pagination.Item>
        <Pagination.Item
          href={`/${urlLocation === "" ? urlDefault : urlLocation}/2`}
        >
          {2}
        </Pagination.Item>
        <Pagination.Item
          href={`/${urlLocation === "" ? urlDefault : urlLocation}/3`}
        >
          {3}
        </Pagination.Item>
        <Pagination.Item
          href={`/${urlLocation === "" ? urlDefault : urlLocation}/4`}
        >
          {4}
        </Pagination.Item>
        <Pagination.Item
          href={`/${urlLocation === "" ? urlDefault : urlLocation}/5`}
        >
          {5}
        </Pagination.Item>
        <Pagination.Last
          href={`/${urlLocation === "" ? urlDefault : urlLocation}/500`}
        />
      </Pagination>
    </>
  );
}

export default Navegation;
