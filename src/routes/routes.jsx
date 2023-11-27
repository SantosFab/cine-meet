import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Genre from "../components/genre/Genre";
import Search from "../components/search/Search";
import DetailMovie from "../components/detailMovie/DetailMovie";

const AppRouter = () => {
  const arrayGenre = useSelector((state) => state.genre.arrayGenre);

  return (
    <Routes>
      <Route index element={<Genre />} />
      <Route path={`/Page`} element={<Genre />} />
      <Route path={`/Page/:page`} element={<Genre />} />
      <Route path={'/Detail/:type/:name/:id'} element={<DetailMovie />} />
      <Route path={'/Search/:query'} element={<Search />} />
      <Route path={'/Search/:query/:page'} element={<Search />} />
      {arrayGenre.map((genre) => (
        <Route path={`/${genre[0]}`} element={<Genre />} key={genre} />
      ))}
      {arrayGenre.map((genre) => (
        <Route path={`/${genre[0]}/:page`} element={<Genre />} key={genre} />
      ))}
    </Routes>
  );
};

export default AppRouter;
