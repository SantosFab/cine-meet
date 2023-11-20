import { Routes, Route } from "react-router-dom";
import Home from "../page/home/Home";
import About from "../page/about/About";

const AppRouter = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/layout" element={<About />} />
  </Routes>
);

export default AppRouter;
