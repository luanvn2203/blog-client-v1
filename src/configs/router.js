import HomeController from "../pages/Home";

export const mainRouter = [
  {
    path: "/",
    exact: "true",
    Component: <HomeController />,
  },
  {
    path: "/2",
    exact: "true",
  },
];
