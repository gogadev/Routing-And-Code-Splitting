import React from "react";

import "./advanced-filter.style.css";

const AdvancedFilter = ({ searchValue, handleChangeValue }) => {
  return (
      <form className="form">
        <input
          type="text"
          name="name"
          value={searchValue.name}
          onChange={(e) => handleChangeValue(e)}
          placeholder="Country"
        />
        <input
          type="text"
          name="capital"
          value={searchValue.capital}
          onChange={(e) => handleChangeValue(e)}
          placeholder="Capital"
        />
        <input
          type="number"
          min="0"
          name="population"
          value={searchValue.population}
          onChange={(e) => handleChangeValue(e)}
          placeholder="Population"
        />
      </form>
  );
};

export default AdvancedFilter;
