import React, { Component } from "react";
import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";
import cx from "classnames";

export class CountryPicker extends Component {
  state = {
    countries: [],
    isActive: "global",
  };

  async componentDidMount() {
    const countries = await fetchCountries();
    this.setState({ countries });
  }

  // Handle the user clicking on a country
  handleClick = (e, country) => {
    this.props.handleCountryChange(country);
    const isActive = e.target.value;
    this.setState({ isActive });
  };

  // Apply button highlight to the active country
  applyActiveButtonClass = (country) => {
    return this.state.isActive === country ? styles.active : null;
  };

  // Determine whether to apply the show or hide css class based on props.
  getComponentClasses = () => {
    const { showingSidebar, isMobile } = this.props;

    if (!isMobile) {
      return styles.show;
    } else if (isMobile && showingSidebar) {
      return styles.show;
    } else return styles.hide;
  };

  render() {
    return (
      <div
        key={this.props.showingSidebar}
        className={cx(styles.container, this.getComponentClasses())}
      >
        <ul className={styles.list}>
          <li className={styles.item}>
            <button
              className={this.applyActiveButtonClass("global")}
              onClick={(e) => this.handleClick(e, "global")}
              value="global"
            >
              Global
            </button>
          </li>
          {this.state.countries
            ? this.state.countries.map((country, index) => (
                <li className={styles.item} key={index}>
                  <button
                    className={cx(
                      this.state.isActive === country ? styles.active : null
                    )}
                    onClick={(e) => this.handleClick(e, country)}
                    value={country}
                  >
                    {country}
                  </button>
                </li>
              ))
            : null}
        </ul>
      </div>
    );
  }
}

export default CountryPicker;
