import "./genre.css";
import Main from "../cards/Cards";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../../reducer/API/fetch/fetchMovies";
import { useLocation, useParams } from "react-router-dom";
import Navegation from "../navegation/Navegation";

function Genre() {
  const dispatch = useDispatch();
  const { page } = useParams();

  const movies = useSelector((state) => state.fetchMovies.data?.results);
  const urlBaseImg = useSelector((state) => state.genre.urlBaseImg);
  const arrayGenre = useSelector((state) => state.genre.arrayGenre);

  //pegar através da url o gênero atual ou se estar acessando home
  const urlLocation = decodeURIComponent(useLocation().pathname).split("/")[1];

  useEffect(() => {
    const isGenre = arrayGenre.find((genre) => genre[0] === urlLocation);
    if (isGenre !== undefined && isGenre[0] !== "Page") {
      dispatch(fetchMovies({ genre: isGenre[1], page: page }));
    } else {
      dispatch(fetchMovies({ page: page }));
    }
  }, [urlLocation, arrayGenre, dispatch, page]);

  return (
    <div className="Genre">
      <Main movies={movies} urlBaseImg={urlBaseImg} />
      <Navegation urlLocation={urlLocation} />
    </div>
  );
}

export default Genre;
