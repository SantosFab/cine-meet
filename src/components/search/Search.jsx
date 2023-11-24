import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearch } from "../../reducer/fetch/fetchSearch";
import { useParams } from "react-router-dom";
import Cards from "../cards/Cards";
import Navigation from "../navegation/Navegation";
import { useLocation } from "react-router-dom";

function Search() {
  const { query , page } = useParams();
  const hasSearch = useSelector((state) => state.fetchSearch.data?.results);
  const urlBaseImg = useSelector((state) => state.fetchSearch.urlBaseImg);
  const currentPage = useSelector((state)=>state.fetchSearch.data?.page)
  const totalPage = useSelector((state)=>state.fetchSearch.data?.total_pages)
  const arrayUrlLocation = decodeURIComponent(useLocation().pathname).split("/");
  const urlLocation = `${arrayUrlLocation[1]}/${arrayUrlLocation[2]}`;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearch({ query: query , page}));
  }, [dispatch, query, page]);
  return hasSearch?.length !== 0 ? (
    <>
      <Cards movies={hasSearch} urlBaseImg={urlBaseImg}></Cards>
      <Navigation urlLocation={urlLocation} currentPage={currentPage} totalPage={totalPage} ></Navigation>
    </>
  ) : (
    <div>Conteúdo não encontrado</div>
  );
}

export default Search;
