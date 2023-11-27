import "./genre.css";
import Cards from "../cards/Cards";
import Navegation from "../navegation/Navegation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../../reducer/fetch/fetchData";
import { useLocation, useParams } from "react-router-dom";

function Genre() {
  const dispatch = useDispatch();
  const { page } = useParams();

  const movies = useSelector((state) => state.fetchData.data?.results);
  const error = useSelector((state) => state.fetchData.error);
  const urlBaseImg = useSelector((state) => state.fetchData.urlBaseImg);
  const arrayGenre = useSelector((state) => state.genre.arrayGenre);
  const currentPage = useSelector((state) => state.fetchData.data?.page);
  const totalPage = Math.min(
    useSelector((state) => state.fetchData.data?.total_pages),
    500
  );

  //pegar através da url o gênero atual ou se estar acessando home
  const urlLocation = decodeURIComponent(useLocation().pathname).split("/")[1];

  useEffect(() => {
    const isGenre = arrayGenre.find((genre) => genre[0] === urlLocation);
    if (isGenre !== undefined && isGenre[0] !== "Page") {
      const isSeries = isGenre[0] === arrayGenre[arrayGenre.length - 1][0];
      dispatch(fetchData({ genre: isGenre[1], page: page, isSeries }));
    } else {
      dispatch(fetchData({ page: page }));
    }
  }, [urlLocation, arrayGenre, dispatch, page]);

  return (
    <div className="Genre">
      <Cards
        movies={movies}
        urlBaseImg={urlBaseImg}
        urlLocation={urlLocation}
        error={error}
      />
      {error === null ? (
        <Navegation
          urlLocation={urlLocation}
          currentPage={currentPage}
          totalPage={totalPage}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Genre;
