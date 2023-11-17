import Main from "../../components/main/Main";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../../reducer/fetch";

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => {
    return state.fetch.data?.results;
  });

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <Main movies={movies}></Main>
    </div>
  );
}

export default Home;
