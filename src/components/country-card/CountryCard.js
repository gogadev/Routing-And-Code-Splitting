import React from "react";

import "./country-card.style.css";

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <h4 className="name">{country.name}</h4>
      <ul className="country-list">
        <li className="flag-item">
          <img className="flag" src={country.flag} alt="Country Flag" />
        </li>
        <li className="country-item">
          <h4>Capital:</h4>
          <h5>{country.capital}</h5>
        </li>
        <li className="country-item">
          <h4>Population:</h4>
          <h5>{country.population}</h5>
        </li>
        <li className="country-item">
          <h4>Region:</h4>
          <h5>{country.region}</h5>
        </li>
      </ul>
    </div>
  );
};

export default CountryCard;
