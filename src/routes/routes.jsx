import { createBrowserRouter } from "react-router-dom";
import Api from "../page/App";
import ErrorPage from "./errorPage/ErrorPage";
import Home from "../page/home/Home";
import About from "../page/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Api />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/layout",
        element: <About />,
      },
    ],
  },
  
]);
export default router;
