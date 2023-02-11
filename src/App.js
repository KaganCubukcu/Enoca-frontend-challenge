import Home from "./pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Business from "./pages/business/Business";
import About from "./pages/about/About";
import General from "./pages/general/General";
import Health from "./pages/health/Health";
import Entertainment from "./pages/entertainment/Entertainment";
import Science from "./pages/science/Science";
import Sports from "./pages/sports/Sports";
import Technology from "./pages/technology/Technology";
import Categories from "./pages/categories/Categories";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/business",
      element: <Business />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/general",
      element: <General />,
    },
    {
      path: "/health",
      element: <Health />,
    },
    {
      path: "/entertainment",
      element: <Entertainment />,
    },
    {
      path: "/science",
      element: <Science />,
    },
    {
      path: "/sports",
      element: <Sports />,
    },
    {
      path: "/technology",
      element: <Technology />,
    },
    {
      path: "/categories",
      element: <Categories />,
    },
  ]);
  return (
    <div style={{}}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
