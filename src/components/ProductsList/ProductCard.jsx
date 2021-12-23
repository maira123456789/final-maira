import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import {
  ShoppingOutlined,
  EllipsisOutlined,
  StarOutlined,
} from "@ant-design/icons";

import { cartContext } from "../../contexts/cartContext";
import { useState } from "react";
import { favoriteContext } from "../../contexts/favoriteContext";

const ProductCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
  useEffect(() => {
      setCheckInCart(checkItemInCart(item.id))
  });
  const {addProductToFavorite, checkItemInFavorite } = useContext(favoriteContext);
  const [checkInFavorite, setCheckInFavorite] = useState(checkItemInFavorite(item.id));
  useEffect(() => {
    setCheckInFavorite(checkItemInFavorite(item.id))
  })
  return (
    <Card
      hoverable
      key={item.id}
      style={{ width: "280px", margin: "10px" }}
      cover={<img alt="example" src={item.image1} />}
      actions={[
        <StarOutlined 
        style={{ color: checkInFavorite ? "red" : "black", fontSize: "25px" }}
        onClick={() => {
          addProductToFavorite(item);
          setCheckInFavorite(checkItemInFavorite(item.id));
        }}
        />,
        <ShoppingOutlined
          style={{ color: checkInCart ? "red" : "black", fontSize: "25px" }}
          onClick={() => {
            addProductToCart(item);
            setCheckInCart(checkItemInCart(item.id));
          }}
        />,
        <Link to={`/products/${item.id}`}>
          <EllipsisOutlined
            style={{ color: "black", fontSize: "25px" }}
            key="ellipsis"
          />
        </Link>,
      ]}
    >
      <Card.Meta
        title={item.brand}
        description={
          <>
            <h3>{item.model}</h3>
            <h2>{"$" + item.price}</h2>
          </>
        }
      />
    </Card>
  );
};

export default ProductCard;
