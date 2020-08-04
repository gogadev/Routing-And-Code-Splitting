import React, { useState, useEffect, useRef, useReducer } from "react";

import { getAllCountries } from "../../calls/AllCountries";

import AdvancedFilter from "../../components/advanced-filter/AdvancedFilter";
import CountryCard from "../../components/country-card/CountryCard";

import "./countries.style.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const componentIsMounted = useRef(true);
  const [filterInput, setFilterInput] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      name: "",
      capital: "",
      population: "",
    }
  );

  useEffect(() => {
    getAllCountries()
      .then((res) => {
        if (componentIsMounted.current) {
          setCountries(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  const handleFilterCountries = (e) => {
    const { name, value } = e.target;
    setFilterInput({ [name]: value });
  };

  const filterCountries = (list) => {
    return list.filter((item) => {
      return (
        item.name.toLowerCase().includes(filterInput.name.toLowerCase()) &&
        item.capital
          .toLowerCase()
          .includes(filterInput.capital.toLowerCase()) &&
        item.population >= filterInput.population
      );
    });
  };

  const countriesList = filterCountries(countries);

  return (
    <React.Fragment>
      <AdvancedFilter
        searchValue={filterInput}
        handleChangeValue={handleFilterCountries}
      />
      <div className="countries-container">
        {countriesList.map((country) => (
          <CountryCard key={country.numericCode} country={country} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Countries;
