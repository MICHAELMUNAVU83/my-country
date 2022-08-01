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
  console.log(index);
  console.log(name);
  return (
    <div>
      Details
      <Link to="/">back</Link>

    </div>
  );
}

export default Details;
