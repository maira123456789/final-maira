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
          style={{ width: "100px" }}
          src="https://upload.wikimedia.org/wikipedia/ru/7/7f/Chevrolet_new_logo.png"
          alt=""
        />

        <img
          style={{ width: "100px" }}
          src="https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-1-1.png"
          alt=""
        />

        <img
          style={{ width: "100px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png"
          alt=""
        />

        <img
          style={{ width: "100px" }}
          src="https://www.carlogos.org/logo/Cadillac-logo-2014-1920x1080.png"
          alt=""
        />

        <img
          style={{ width: "100px" }}
          src="https://автолого.рф/wp-content/uploads/dodge-logo-1990-2100x2100-1024x1024.png"
          alt=""
        />

        <img
          style={{ width: "100px" }}
          src="https://автолого.рф/wp-content/uploads/pontiac-logo-1957-1920x1080.png"
          alt=""
        />

        <img
          style={{ width: "100px" }}
          src="https://автолого.рф/wp-content/uploads/plymouth-logo-1920x1080.png"
          alt=""
        />
      </div>
      <div className="link">
        <a
          style={{ display: "flex", justifyContent: "center", color: "black" }}
        >
          <Link to="/favorites">THE BEST OF ALL THE TIME</Link>
          
        </a>
      </div>
      <div className="cards">
        <Card
          hoverable
          style={{ width: 320 }}
          cover={
            <img
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
              alt="example"
              src="https://lh3.googleusercontent.com/proxy/xReEdzJ7xgvSsg39yo7TqAEO87WRmi9rcV-xVOLmq6TLj-ZCadNp9K8xTd0GknaSahpybwrrkzhdyK2U7tK9B7jNqIIMdzd0ivchbM8iX4DA7_S79fcJMsRv-hQsUCjDcw"
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
