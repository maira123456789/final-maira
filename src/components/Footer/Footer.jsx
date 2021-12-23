import React from "react";
import "./Footer.css";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="first-footer">
      <div className="back">
        <a style={{fontSize:"30px"}} onClick={()=> window.scrollTo({top: 0, behavior: 'smooth'})}>🔝</a>
      </div>
      <div className="footer">
        <div className="foot">
          <h3>ABOUT US</h3>
          <a style={{ color: "black" }}>About Us</a>
          <a style={{ color: "black" }}>Press Room</a>
          <a style={{ color: "black" }}>Careers</a>
          <a style={{ color: "black" }}>Newsletter Sign Up</a>
        </div>

        <div className="foot">
          <h3>CATEGORIES</h3>
          <a style={{ color: "black" }}>Models</a>
          <a style={{ color: "black" }}>Brands</a>
        </div>

        <div className="foot">
          <div className="ins">
            <a>
              <InstagramOutlined />
            </a>
            <a>
              <FacebookOutlined />
            </a>
            <a>
              <TwitterOutlined />
            </a>
            <a>
              <YoutubeOutlined />
            </a>
            <a>
              <WhatsAppOutlined />
            </a>
          </div>
        </div>
      </div>
      <p className="copyrights" style={{ marginTop: "3%", marginLeft: "1%" }}>
        Copyright © 2021 RetroCars. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
