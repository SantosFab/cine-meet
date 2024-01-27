import { Routes, Route } from "react-router-dom";
import ShowMovies from "./route/showMovies/ShowMovies";
import { arrayGenre } from "../utils/genre/arrayGenre";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ShowMovies />}>
        <Route path=":page" element={<ShowMovies />} />
      </Route>
      {arrayGenre.map((genre) => (
        <Route path={`/${genre[0]}`} element={<ShowMovies />} key={genre[1]}>
          <Route
            path={`/${genre[0]}/:page`}
            element={<ShowMovies />}
            key={genre[1]}
          />
        </Route>
      ))}
    </Routes>
  );
};

export default AppRouter;
