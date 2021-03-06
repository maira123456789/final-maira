import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import BrandsList from "./components/BrandsList/BrandsList";
import Cart from "./components/Cart/Cart";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";
import Invoice from "./components/Invoice/Invoice";
import Pay from "./components/Pay/Pay";

import ProductsList from "./components/ProductsList/ProductsList";
import { useAuth } from "./contexts/authContext";
import AdminPage from "./pages/AdminPage";
import Error404 from "./pages/Error404";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/products",
      element: <ProductsList />,
      id: 2,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 3,
    },
    {
      link: "/brands",
      element: <BrandsList />,
      id: 4,
    },
    {
      link: "/products/:id",
      element: <DetailsProduct />,
      id: 5,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 6,
    },
    {
      link: "/favorites",
      element: <Favorites />,
      id: 7,
    },
    {
      link: "/pay",
      element: <Pay />,
      id: 8,
    },
    {
      link: "/invoice",
      element: <Invoice />,
      id: 9,
    },
  ];
  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 2,
    },
  ];
  const { user } = useAuth();
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
      {user
        ? ADMIN_ROUTES.map((item) => (
            <Route
              path={item.link}
              element={
                user.email === "maira@gmail.com" ? (
                  item.element
                ) : (
                  <Navigate replace to="*" />
                )
              }
            />
          ))
        : null}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routing;
