import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FilmDetailed from "../pages/FilmDetailed"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/acceso", element: <Login /> },
      { path: "/registro", element: <Register /> },
      { path: "/peliculas/:id", element: < FilmDetailed /> },
    ],
  },
 
]);
