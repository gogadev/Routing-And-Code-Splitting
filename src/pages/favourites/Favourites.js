import React from "react";

import Ireland from "../../assets/favourites/Ireland.jpg";
import Slovenia from "../../assets/favourites/Slovenia.jpg";
import Canada from "../../assets/favourites/Canada.jpg";
import Japan from "../../assets/favourites/Japan.jpg";
import Portugal from "../../assets/favourites/Portugal.jpg";
import Switzerland from "../../assets/favourites/Switzerland.jpg";

import "./favourites.style.css";

const Favourites = () => {
  return (
    <div className="favourites">
      <div className="fav-country">
        <h4 className="country-name">Ireland</h4>
        <img src={Ireland} alt="Ireland" />
      </div>
      <div className="fav-country">
        <h4 className="country-name">Slovenia</h4>
        <img src={Slovenia} alt="Slovenia" />
      </div>
      <div className="fav-country">
        <h4 className="country-name">Canada</h4>
        <img src={Canada} alt="Canada" />
      </div>
      <div className="fav-country">
        <h4 className="country-name">Portugal</h4>
        <img src={Portugal} alt="Portugal" />
      </div>
      <div className="fav-country">
        <h4 className="country-name">Switzerland</h4>
        <img src={Switzerland} alt="Switzerland" />
      </div>
      <div className="fav-country">
        <h4 className="country-name">Japan</h4>
        <img src={Japan} alt="Japan" />
      </div>
    </div>
  );
};

export default Favourites;
