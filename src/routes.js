import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TextFroms from "./pages/TextFroms";

// Layout component that wraps the navbar and the route's outlet
const Layout = () => (
  <>
    <Navbar />
    <main className="my-4">
    <Outlet />
    </main>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap all child routes with Layout
    children: [
      {
        index: true, // This represents the root path "/"
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "text-utils",
        element: <TextFroms />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
