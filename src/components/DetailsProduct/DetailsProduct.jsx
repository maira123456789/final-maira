import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Carousel } from "antd";

import { productsContext } from "../../contexts/productsContext";
import Comment from "../Comments/Comment";
import Likes from "../Likes/Likes";

const DetailsProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);
  return (
    <div className="container" style={{marginTop:"20px"}}>
      {product ? ( // проверка стоит если он есть отображаем страницу детального просмотра если нет ЛОАДИНГ
          <>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",marginBottom:"20px"}}>
          <div style={{ width: "35vw" , border:"0px solid black"}}>
            <Carousel autoplay>
              <div style={{}}>
                <img width="100%" src={product.image1} alt="" />
              </div>
              <div>
                <img width="100%" src={product.image2} alt="" />
              </div>
            </Carousel>
          </div>
          <div style={{width: "40vw"}}>
          
              <h2>{product.brand} <Likes/></h2>
              <h3>{product.model}</h3>
              <h2>{product.price + " $"}</h2>
              <div>{product.description}</div>
              
          </div>
        </div>
        <Comment/>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailsProduct;
