import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Genre from "../page/genre/Genre";

const AppRouter = () => {
  const arrayGenre = useSelector((state) => state.genre.arrayGenre);
  return (
    <Routes>
      <Route index element={<Genre />} />
      {arrayGenre.map((genre) => (
        <Route path={`/${genre[0]}`} element={<Genre />} key={genre} />
      ))}
    </Routes>
  );
};

export default AppRouter;
