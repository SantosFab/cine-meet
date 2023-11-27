import "./urlDefault.css";
import { useSelector } from "react-redux";

function UrlDefault() {
  const errors = useSelector((state) => [
    state.fetchData.error,
    state.fetchDetail.error,
    state.fetchSearch.error,
  ]);

  const hasErrors = errors.some((error) => error !== null);

  return (
    <div className="UrlDefault d-flex justify-content-center align-items-center fs-2">
      Página não encontrada
      {hasErrors && (
        <>
          <br />
          Error: {errors.join(" ")}
        </>
      )}
    </div>
  );
}

export default UrlDefault;
