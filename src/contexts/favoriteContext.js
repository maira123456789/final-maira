import React, { useReducer } from "react";
import { CASE_GET_FAVORITE } from "../helpers/cases";

export const favoriteContext = React.createContext();

const INIT_STATE = {
  favorite: {}
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_FAVORITE:
      return {
        ...state,
        favorite: action.payload,
      };
    default:
      return state;
  }
};

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function addProductToFavorite(product) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
        favorite = {
        products: []
      };
    }
    let newProduct = {
      item: product,
      count: 1
    };
    let filteredFavorite = favorite.products.filter(
      (item) => item.item.id === product.id
    );
    if (filteredFavorite.length > 0) {
        favorite.products = favorite.products.filter(
        (item) => item.item.id !== product.id
      );
    } else {
        favorite.products.push(newProduct);
    }
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite() //автоматически обновляет избранное
  }
  function getFavorite() {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
        favorite = {
        products: []
      };
    }
    dispatch({
      type: CASE_GET_FAVORITE,
      payload: favorite,
    });
  }
  function deleteFromFavorite(id) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
        favorite = {
        products: []
      };
    }
    favorite.products = favorite.products.filter((item) => item.item.id !== id);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }

  function checkItemInFavorite(id) { //проверка добавлен ли товар
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
        favorite = {
        products: []
      };
    }
    let filteredFavorite = favorite.products.filter((item) => item.item.id === id);
    return filteredFavorite.length > 0 ? true : false; // проверка есть ли такой элем в избран
  }

  function changeProductCount(count, id) { //количество элементов в избран
    if (count <= 0) {
      count = 1;
    }
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    favorite.products = favorite.products.map((item) => {
      if (item.item.id === id) {
        item.count = count;
      }
      return item;
    });
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }

  return (
    <favoriteContext.Provider
      value={{
        favorite: state.favorite,
        addProductToFavorite,
        getFavorite,
        deleteFromFavorite,
        checkItemInFavorite,
        changeProductCount,
      }}
    >
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
