import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountriesApi } from '../redux/countries';
import {FaArrowAltCircleRight } from 'react-icons/fa';

function Countries() {
  const countries = useSelector((state) => state.countries);
  console.log(countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountriesApi());
  }, [dispatch]);
  const renderCountry = countries.map((country) => (
    <div className="big" key={country.name.common}>
      <Link to="/details"> <FaArrowAltCircleRight/> </Link>

      <img className="flag" src={country.flags.png} alt="flag" />
      <div className="name-population">
        <p>
          {country.name.common}
        </p>
        <p>
          {' '}
          POPULATION:
          {country.population.toLocaleString()}
        </p>
      </div>
    </div>
  ));
  return <div className="all-countries">{renderCountry}</div>;
}

export default Countries;
