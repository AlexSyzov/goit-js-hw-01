import { lazy } from "react";

const routes = [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./components/HomePage/HomePage")),
  },
  {
    path: "/movies",
    label: "Movies",
    exact: true,
    component: lazy(() => import("./components/MoviesPage/MoviesPage")),
  },
  {
    path: "/movies/:movieID",
    exact: false,
    component: lazy(() =>
      import("./components/MovieDetailsPage/MovieDetailsPage")
    ),
  },
];

export default routes;
