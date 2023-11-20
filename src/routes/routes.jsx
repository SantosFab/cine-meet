import { Routes, Route } from "react-router-dom";
import arrayGenre from "../utils/Genre";
import Genre from "../page/genre/Genre";

const AppRouter = () => (
  <Routes>
    <Route index element={<Genre />} />
    <Route path="/home" element={<Genre />} />
    {arrayGenre.map((genre) => (
      <Route path={`/${genre}`} element={<Genre />} />
    ))}
  </Routes>
);

export default AppRouter;
