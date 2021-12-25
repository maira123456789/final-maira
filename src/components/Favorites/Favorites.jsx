import { List } from "antd";
import React, { useContext, useEffect } from "react";
import { favoriteContext } from "../../contexts/favoriteContext";
import FavoritesItem from "./FavoritesItem";

const Favorites = () => {
  const { getFavorite, favorite } = useContext(favoriteContext);
  useEffect(() => {
    getFavorite();
  }, []);
  return (
    <div className="container">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={favorite?.products}
        renderItem={(item) => <FavoritesItem item={item} />}
      />
    </div>
  );
};

export default Favorites;
