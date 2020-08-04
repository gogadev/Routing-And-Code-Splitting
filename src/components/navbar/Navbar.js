import React from "react";
import { NavLink } from "react-router-dom";

import map from "../../assets/map.png";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="img">
        <img className="nav-img" src={map} alt="" />
      </div>
      <ul className="list">
        <li className="item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="item">
          <NavLink to="/countries">Countries</NavLink>
        </li>
        <li className="item">
          <NavLink to="/favourites">Favourites</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
