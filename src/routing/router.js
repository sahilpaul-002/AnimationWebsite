import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import HomeLayout from "../assets/layouts/HomeLayout.jsx";
import AgenceLayout from "../assets/layouts/AgenceLayout.jsx"
import ProjectsLayout from "../assets/layouts/ProjectsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,        // default route → "/"
        Component: HomeLayout
      },
      {
        path: "/agence",
        Component: AgenceLayout
      },
      {
        path: "/projects",
        Component: ProjectsLayout
      }
    ]
  },
]);

export default router;