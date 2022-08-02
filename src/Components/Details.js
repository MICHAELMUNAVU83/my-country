import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCountriesApi } from '../redux/countries';

function Details() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountriesApi());
  }, [dispatch]);
  const { name } = useParams();
  const index = countries.findIndex((item) => item.name.common === name);

  return (
    <div className="details-container">
      <img
        className="card-img-top"
        id="coat"
        src={countries[index].coatOfArms.png}
        alt="Card cap"
      />
      <p className="card-text">
        COUNTRY NAME :
        {countries[index].name.common}
      </p>
      <p className="card-text">
        CONTINENT :
        {countries[index].continents}
      </p>
      <p className="card-text">
        POPULATION :
        {countries[index].population.toLocaleString()}
      </p>
      <p className="card-text">
        CAPITAL CITY :
        {countries[index].capital}
      </p>
      <p className="card-text">
        AREA IN SQ METRES :
        {countries[index].area.toLocaleString()}
      </p>
      <p className="card-text">
        Timezone :
        {countries[index].timezones}
      </p>
      <Link to="/"><button type="button" className="btn btn-danger btn-lg">BACK</button></Link>
    </div>
  );
}

export default Details;
