import { useParams } from "react-router-dom";
import { useEffect } from "react";

function DetailMovie() {
  const { movieId } = useParams();

  useEffect(() => {
    
  }, [movieId]);

  return (
    <>
      <div>Opa tá funcionando</div>
      <div>Bora construir mais um componente</div>
    </>
  );
}

export default DetailMovie;
