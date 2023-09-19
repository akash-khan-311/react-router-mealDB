import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import ParticlesStyle from "./components/Particles/Particles";
import Layout from "./Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Foods from "./components/Foods/Foods";
import Contact from "./components/Contact/Contact";
import FoodDetails from "./components/FoodDetails/FoodDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        {
          path: "/foods",
          element: <Foods />,
          loader: () =>
            fetch("https://www.themealdb.com/api/json/v1/1/search.php?s"),
        },
        { path: "/contact", element: <Contact /> },
        {
          path: "/food/:id",
          element: <FoodDetails />,
          loader: ({ params }) =>
            fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
            ),
        },
      ],
    },
  ]);
  return (
    <div className="bg-gradient-to-r from-[#220D3E] via-[#3D0646] to-[#4c0457] ">
      <ParticlesStyle />

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
