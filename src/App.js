import React, { Component } from "react";
import { Cards, Chart, CountryPicker, Header } from "./components/";
import styles from "./App.module.css";
import { fetchData } from "./api";

export class App extends Component {
  state = {
    data: {},
    country: "",
    showingSidebar: false,
    isMobile: true,
  };

  fetchData = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country,
    });
  };

  // When a different country is selected from the sidebar, fetch the data for that country.
  handleCountryChange = async (country) => {
    // If on narrow display, hide the sidebar after clicking a new country.
    if (this.state.isMobile) {
      this.setState({ showingSidebar: false });
    }
    this.fetchData(country);
  };

  // Toggle Sidebar passed into Header which has a toggle button for the sidebar
  toggleSidebar = () => {
    this.setState({
      showingSidebar: !this.state.showingSidebar,
    });
  };
  // Watch the screen size. Mobile view is defined as being under 900px wide
  watchScreenSize = () => {
    // Set listener for the screen to resize at 900px
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          isMobile: window.innerWidth < 900,
        });
      },
      false
    );
    // If the screen is over 900px, show the sidebar
    if (!this.state.isMobile) {
      this.setState({ showingSidebar: true });
    }
  };

  // When the screen is resized from over 900px to under 900px, hide the sidebar.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.isMobile === false && this.state.isMobile === true) {
      this.showingSidebar = false;
    }
  }

  async componentDidMount() {
    this.fetchData();
    this.watchScreenSize();
  }

  render() {
    const { data, country, isMobile, showingSidebar } = this.state;
    return (
      <div className={styles.container}>
        <Header toggleSidebar={this.toggleSidebar} />
        <CountryPicker
          showingSidebar={showingSidebar}
          isMobile={isMobile}
          handleCountryChange={this.handleCountryChange}
        />
        <div className={styles.wrapper}>
          <Cards country={country} data={data} />
          <Chart country={country} data={data} />
        </div>
      </div>
    );
  }
}

export default App;
