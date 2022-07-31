import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountriesApi } from '../redux/countries';


function Countries() {
  const countries = useSelector((state) => state.countries);
  console.log(countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountriesApi());
  }, [dispatch]);
  const renderCountry = countries.map((country) => (
    <div className="big" key={country.name.common}>
      <img src={country.flags.png} alt="flag" />
      <p>
        {' '}
        COUNTRY:
        {country.name.common}
      </p>
      <p>
        {' '}
        POPULATION:
        {country.population.toLocaleString() }
      </p>
      <Link to='/details'>detaila</Link>
    </div>
  ));
  return <div>{renderCountry}</div>;
}

export default Countries;
