import { Routes, Route } from "react-router-dom";
import ShowMovies from "./route/showMovies/ShowMovies";
import { arrayGenre } from "../utils/genre/arrayGenre";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<ShowMovies />} />
      <Route path="/:page" element={<ShowMovies />} />
      {arrayGenre.map((genre) => (
        <Route
          path={`/${genre[0]}/:page`}
          element={<ShowMovies />}
          key={genre[0]}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
