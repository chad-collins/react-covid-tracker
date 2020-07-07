import React, { useState, useEffect } from 'react';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
   <div></div>
  );
};


export default CountryPicker