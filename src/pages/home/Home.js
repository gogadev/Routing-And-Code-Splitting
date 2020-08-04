import React from "react";

import image from "../../assets/globe.jpg";

import "./home.style.css";

const Home = () => {
  return (
    <div className="home container">
      <h1 className="title">Welcome</h1>
      <h3 className="text">
        In this app you can check basic data of all countries in the world.
      </h3>
      <h4 className="subtitle">Feel free to explore!</h4>
      <div className="banner-img">
        <img className="banner-image" src={image} alt="" />
      </div>
    </div>
  );
};

export default Home;
