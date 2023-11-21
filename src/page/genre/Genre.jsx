import Main from "../../components/main/Main";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../../reducer/fetch";
import { useLocation } from "react-router-dom";

function Genre() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => {
    return state.fetch.data?.results;
  });
  const urlBaseImg = useSelector((state) => state.genre.urlBaseImg);
  const arrayGenre = useSelector((state) => state.genre.arrayGenre);

  const location = useLocation();
  const urlLocation = decodeURIComponent(location.pathname).substring(1);

  useEffect(() => {
    const isGenre = arrayGenre.find((genre) => genre[0] === urlLocation);
    if (isGenre) {
      dispatch(fetchData(isGenre[1]));
    } else {
      dispatch(fetchData());
    }
  }, [location]);

  return (
    <div>
      <Main movies={movies} urlBaseImg={urlBaseImg}></Main>
    </div>
  );
}

export default Genre;
