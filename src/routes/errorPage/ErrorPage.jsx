import { useRouteError } from "react-router-dom";
import "./errorpage.css";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="height">
      <h1>Oops!</h1>
      <p>Desculpe, ocorreu um erro inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
export default ErrorPage;
