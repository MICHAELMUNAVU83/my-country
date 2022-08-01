import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaChevronCircleLeft } from 'react-icons/fa';
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
    <div>
      <img
        className="card-img-top"
        id="coat"
        src={countries[index].coatOfArms.png}
        alt="Card cap"
      />
      <p className="card-text">
        COUNTRY :
        {countries[index].name.common}
      </p>
      <p className="card-text">
        CONTINENT :
        {countries[index].continents}
      </p>
      <p className="card-text">
        POPULATION :
        {countries[index].population}
      </p>
      <p className="card-text">
        CAPITAL :
        {countries[index].capital}
      </p>
      <p className="card-text">
        AREA :
        {countries[index].area}
      </p>
      <p className="card-text">
        Timezone :
        {countries[index].timezones}
      </p>
      <Link to="/"><FaChevronCircleLeft /></Link>
    </div>
  );
}

export default Details;
