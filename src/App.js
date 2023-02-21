import Home from "./pages/Home";
import About from "./pages/about/About";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const selectedCategory = useSelector(
    (state) => state.filterSlice.selectedCategory
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: `/:${selectedCategory}`,
      element: <CategoryDetails />,
    },

    {
      path: "/categories",
      element: <Categories />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
