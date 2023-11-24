import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearch } from "../../reducer/fetch/fetchSearch";
import { useParams } from "react-router-dom";
import Cards from "../cards/Cards";

function Search() {
  const { query } = useParams();
  const hasSearch = useSelector((state) => state.fetchSearch.data?.results);
  const urlBaseImg = useSelector((state) => state.fetchSearch.urlBaseImg);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearch({ query: query }));
  }, [dispatch, query]);

  return <Cards movies={hasSearch} urlBaseImg={urlBaseImg}></Cards>;
}

export default Search;
