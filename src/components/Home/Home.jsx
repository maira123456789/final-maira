import React from "react";
import "./Home.css";
import { Card, Carousel } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
const Home = () => {
  return (
    <div className="home-main">
      <div className="img">
        <img
          style={{ width: "120px",height:"80px" }}
          src="https://upload.wikimedia.org/wikipedia/ru/7/7f/Chevrolet_new_logo.png"
          alt=""
        />

        <img
          style={{ width: "120px",height:"80px" }}
          src="https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-1-1.png"
          alt=""
        />

        <img
          style={{ width: "120px",height:"80px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png"
          alt=""
        />

        <img
          style={{ width: "120px",height:"80px" }}
          src="https://www.carlogos.org/logo/Cadillac-logo-2014-1920x1080.png"
          alt=""
        />

        <img
          style={{ width: "120px",height:"80px" }}
          src="https://автолого.рф/wp-content/uploads/dodge-logo-1990-2100x2100-1024x1024.png"
          alt=""
        />

        <img
          style={{ width: "120px",height:"80px" }}
          src="https://автолого.рф/wp-content/uploads/pontiac-logo-1957-1920x1080.png"
          alt=""
        />

        <img
          style={{ width: "120px",height:"80px" }}
          src="https://автолого.рф/wp-content/uploads/plymouth-logo-1920x1080.png"
          alt=""
        />
      </div>
      <div className="link" style={{textDecoration:"none"}}>
          <Link to="/favorites" style={{color:"black",display:"flex",justifyContent:"center"}}>THE BEST OF ALL THE TIME</Link>
      </div>
      <div className="cards">
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
            style={{width:"315px",height:"200px"}}
              alt="example"
              src="https://avatars.mds.yandex.net/get-verba/787013/2a0000016090e9f4428d684fc4c2d293b92d/cattouch"
            />
          }
        >
          <Meta title="CHEVROLET" description="CAMARO" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
            style={{width:"315px",height:"200px"}}
              alt="example"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/64_Chevelle_Malibu_SS_Coupe.jpg/305px-64_Chevelle_Malibu_SS_Coupe.jpg"
            />
          }
        >
          <Meta title="CHEVROLET" description="MALIBU_SS" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
            style={{width:"315px",height:"200px"}}
              alt="example"
              src="https://auto.ironhorse.ru/wp-content/uploads/2015/12/Mustang-1-Cabrio.jpg"
            />
          }
        >
          <Meta title="CHEVROLET" description="MUSTANG" />
        </Card>
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
            style={{width:"315px",height:"200px"}}
              alt="example"
              src="https://www.hushhush.com/wp-content/uploads/2019/05/20161026-162204-luxify-2483-26878-600x400.jpg"
            />
          }
        >
          <Meta title="PONTIAC" description="GTO" />
        </Card>
      </div>
    </div>
  );
};

export default Home;
