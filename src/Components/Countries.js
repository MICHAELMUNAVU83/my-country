import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountriesApi } from '../redux/countries';

function Countries() {
  const countries = useSelector((state) => state.countries);
  console.log(countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountriesApi());
  }, [dispatch]);
  return <div>Countries</div>;
}

export default Countries;
