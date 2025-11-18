import { createBrowserRouter } from "react-router";
import AppLayout from "../assets/layouts/AppLayout.jsx";
import AgenceLayout from "../assets/layouts/AgenceLayout.jsx"
import ProjectsLayout from "../assets/layouts/ProjectsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
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