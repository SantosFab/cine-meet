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
  const urlBaseImg = useSelector((state)=> state.genre.urlBaseImg)

  const location = useLocation();
  console.log(decodeURIComponent(location.pathname))

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <Main movies={movies} urlBaseImg={urlBaseImg}></Main>
    </div>
  );
}

export default Genre;
