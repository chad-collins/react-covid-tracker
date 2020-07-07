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

  handleClick = (e, country) => {
    this.props.handleCountryChange(country);
    const isActive = e.target.value
    this.setState({ isActive })
  }

  getActiveClass = (country) => {
    return this.state.isActive == country ? styles.active : null
  }

  render() {

    return (
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}

          >
            <button
              className={this.getActiveClass('global')}
              onClick={(e) => this.handleClick(e, 'global')}
              value="global"
            >Global

              </button>



          </li>
          {this.state.countries ? (this.state.countries.map((country, index) =>
            <li
            className={styles.item}
            >
              <button
                className={this.state.isActive == country ? styles.active : null}
                onClick={(e) => this.handleClick(e, country)}
                key={index}
                value={country}
              >{country}

              </button>
            </li>
          )) : null}
        </ul>

      </div>
    )
  }
}

export default CountryPicker
