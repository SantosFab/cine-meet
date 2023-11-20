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

  const location = useLocation();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <Main movies={movies}></Main>
    </div>
  );
}

export default Genre;
