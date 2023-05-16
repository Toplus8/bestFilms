import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import About from "../pages/About";
import Error from "../pages/Error";
import Home from "../pages/Home";

export const router = createBrowserRouter([
 /* {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      // {path:"/peliculas" , element: <peliculas />},
    ],
  },*/
  {
    path: "/",
    element
  },
]);
