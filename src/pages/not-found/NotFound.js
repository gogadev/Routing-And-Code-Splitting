import React from "react";

import notFoundImg from "../../assets/not-found.png";

import "./not-found.style.css";

const NotFound = () => {
  return (
    <div className="container">
      <img className="not-found-img" src={notFoundImg} alt="" />
    </div>
  );
};

export default NotFound;
