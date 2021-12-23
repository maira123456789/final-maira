import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { useAuth } from "../../contexts/authContext";
import { cartContext } from "../../contexts/cartContext";

import "./Header.css";

const Header = () => {
  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  const { getCart, cartLength } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  const NAV_ITEMS = [
    {
      title: "MARQUES",
      link: "/brands",
      id: 1,
    },
    {
      title: "CARS",
      link: "/products",
      id: 2,
    },
    {
      title: "FAVORITES",
      link: "/favorites",
      id: 3,
    }
  ];
  return (
    <>
      <nav>
        <div style={{display:"flex",margin:"1%"}}>
        <Link style={{paddingRight:"15%"}} to="/cart">
            <Badge count={+cartLength}>
              <ShoppingCartOutlined
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </Badge>
          </Link>
          {email ? (
            <Link to="/auth">
              <button className="sign-btn" onClick={handleLogout}>
                Logout
              </button>
            </Link>
          ) : null}

          {email ? null : (
            <Link to="/auth">
              <button className="sign-btn">Login</button>
            </Link>
            
          )}
          
        </div>
      </nav>
      <div className="header">
        <div></div>
        <Link to="/">
          <img
            width="100px"
            src="https://svgheart.com/wp-content/uploads/2020/05/classic-car-free-svg-file.png"
            alt=""
          />
        </Link>
        <div>
          
        </div>
      </div>
      <div className="navbar">
        {NAV_ITEMS.map((item) => (
          <Link
            to={item.link}
            className={
              location.pathname === item.link
                ? "navbar__item-active"
                : "navbar__item"
            }
          >
            {item.title}
          </Link>
        ))}
        {email === "maira@gmail.com" ? (
          <Link
            className={
              location.pathname === "/admin"
                ? "navbar__item-active"
                : "navbar__item"
            }
            to="/admin"
          >
            ADMIN
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default Header;
