import { Routes, Route } from "react-router-dom";
import ShowMovies from "./route/showMovies/ShowMovies";
import { arrayGenre } from "../utils/genre/arrayGenre";
import Details from "./route/MovieDetail/MovieDetail";
import SearchMovies from "./route/searchMovies/SearchMovies";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<ShowMovies />} />
      <Route path="/Detail/:type/:id" element={<Details />} />
      <Route path="/Page/:page" element={<ShowMovies />} />
      <Route path="/SearchMovies/:query/:page" element={<SearchMovies />} />
      {arrayGenre.map((genre) => (
        <Route path={`/${genre[0]}`} element={<ShowMovies />} key={genre[0]}>
          <Route
            path={`/${genre[0]}/:page`}
            element={<ShowMovies />}
            key={`${genre[0]}-page`}
          />
        </Route>
      ))}
    </Routes>
  );
};

export default AppRouter;
