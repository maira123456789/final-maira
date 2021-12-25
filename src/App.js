import React from "react";
import { BrowserRouter } from "react-router-dom";

import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";
import BrandsContextProvider from "./contexts/brandsContext";
import FavoriteContextProvider from "./contexts/favoriteContext";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Routing from "./Routing";

import "antd/dist/antd.css";
import "./App.css";
import CartContextProvider from "./contexts/cartContext";
import CommentContextProvider from "./contexts/CommentContext";
import LikesContextProvider from "./contexts/likesContext";

const App = () => {
  return (
    <AuthContextProvider>
      <LikesContextProvider>
        <CommentContextProvider>
          <FavoriteContextProvider>
            <CartContextProvider>
              <BrandsContextProvider>
                <ProductsContextProvider>
                  <BrowserRouter>
                    <Header />
                    <Routing />
                    <Footer />
                  </BrowserRouter>
                </ProductsContextProvider>
              </BrandsContextProvider>
            </CartContextProvider>
          </FavoriteContextProvider>
        </CommentContextProvider>
      </LikesContextProvider>
    </AuthContextProvider>
  );
};

export default App;
