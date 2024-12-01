import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Coffees from "./components/coffees/Cofffees";
import AddCoffee from "./components/addCoffee/AddCoffee";
import UpdateCoffee from "./components/updateCoffee/UpdateCoffee";
import Details from "./components/viewDetails/Viewdetails";
import AuthProvider from "./AuthProvider/AuthProvider";
import Login from "./components/LogInnAndRegister/Login";
import Register from "./components/LogInnAndRegister/Register";
import Users from "./components/Users/Users";
import UpdateUser from "./components/UserUpdate/UserUpdate";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Coffees></Coffees>,
        // loader: () => fetch(`http://localhost:5000/coffees`),
        loader: () =>
          fetch(`http://localhost:5000/coffees`),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          // fetch(`http://localhost:5000/coffees/${params.id}`),
          fetch(
            `http://localhost:5000/coffees/${params.id}`
          ),
      },
      {
        path: "/coffeeDetails/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          // fetch(`http://localhost:5000/coffees/${params.id}`),
          fetch(
            `http://localhost:5000/coffees/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        // loader: () => fetch(`http://localhost:5000/users`),
        loader: () =>
          fetch(`http://localhost:5000/users`),
      },
      {
        path: "/updateUser/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({ params }) =>
          // fetch(`http://localhost:5000/users/${params.id}`),
          fetch(
            `http://localhost:5000/users/${params.id}`
          ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
