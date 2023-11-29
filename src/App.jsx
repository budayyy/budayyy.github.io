import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Stack from "./Stack";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/projects",
      element: <Project />,
    },
    {
      path: "/stacks",
      element: <Stack />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return <RouterProvider router={router} />;
}
