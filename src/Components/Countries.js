import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { getCountriesApi, getSearchedCountries } from '../redux/countries';
import Continent from './Continent';

function Countries() {
  const countries = useSelector((state) => state.countries);
  console.log(countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountriesApi());
  }, [dispatch]);
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getSearchedCountries(search));
  };
  const showAll = (e) => {
    e.preventDefault();
    dispatch(getCountriesApi());
    setSearch('');
  };

  const renderCountry = countries.map((country) => (
    <div className="big" key={country.name.common}>
      <Link to={`/details/${country.name.common}`} className="more-details">
        {' '}
        <FaArrowAltCircleRight />
        {' '}
      </Link>

      <img className="flag" src={country.flags.png} alt="flag" />
      <div className="name-population">
        <p>{country.name.common}</p>
        <p>
          {' '}
          POPULATION:
          {country.population.toLocaleString()}
        </p>
      </div>
    </div>
  ));
  return (
    <div>
      <Continent />
      <div>
        <input
          placeholder="search country"
          onChange={handleChange}
          value={search}
        />
        <button type="button" onClick={handleSearch}>
          SEARCH
        </button>
        <button
          type="button"
          onClick={showAll}
        >
          SEE ALL
        </button>
      </div>

      <div className="all-countries">{renderCountry}</div>
    </div>
  );
}

export default Countries;
