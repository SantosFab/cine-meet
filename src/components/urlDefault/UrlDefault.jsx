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
    <div className="UrlDefault fs-2">
      <div>Página não encontrada</div>
      {hasErrors && <div>Error: {errors.join(" ")}</div>}
    </div>
  );
}

export default UrlDefault;
