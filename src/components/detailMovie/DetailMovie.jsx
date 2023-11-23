import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchDetail } from "../../reducer/API/fetch/fetchDetail";
import { useSelector, useDispatch } from "react-redux";

function DetailMovie() {
  const { movieId } = useParams();
  const dispatch = useDispatch()
  const movie = useSelector((state) => state.fetchDetail.data)
  console.log(movie)

  useEffect(() => {
    dispatch(fetchDetail(movieId))
  }, [movieId]);

  return (
    <>
      <div>Opa tá funcionando</div>
      <div>Bora construir mais um componente</div>
    </>
  );
}

export default DetailMovie;
