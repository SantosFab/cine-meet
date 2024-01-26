import { Routes, Route } from "react-router-dom";
import ShowMovies from "./route/showMovies/ShowMovies";

const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<ShowMovies/>}/>
    </Routes>
  );
};

export default AppRouter;
