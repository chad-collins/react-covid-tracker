import React, { Component } from 'react'
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

export class CountryPicker extends Component {

    state = {
        countries: [],
        isActive: 'global'
    }

    async componentDidMount() {
        const countries = await fetchCountries();
        this.setState({ countries })
    }

    handleClick = (e) => (country) => {
        handleCountryChange(country);
      }

    render() {
        
        return (
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li
                        className={styles.item}
                        onClick={(e) => this.handleClick('global')}
                    >Global
                     </li>
                    {countries.map((country, index) =>
                        <li
                            onClick={(e) => this.handleClick(country)}
                            className={styles.item}
                            key={index}>{country}
                        </li>
                    )}
                </ul>

            </div>
        )
    }
}

export default CountryPicker
