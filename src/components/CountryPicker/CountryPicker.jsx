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
   <div className={styles.container}>
       <h1 className={styles.heading}>Covid Tracker</h1>

   </div>
  );
};


export default CountryPicker