import { Routes, Route } from "react-router-dom";
import Genre from "./route/genre/Genre";

const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Genre/>}/>
    </Routes>
  );
};

export default AppRouter;
