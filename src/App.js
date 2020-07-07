import React, { Component } from 'react'
import { Cards, Chart, CountryPicker, Header } from './components/'
import styles from './App.module.css'
import { fetchData } from './api'


export class App extends Component {

  state = {
    data: {},
    country: '',
  }

  fetchData = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country
    })
  }


  handleCountryChange = async (country) => {
    this.fetchData(country);
  }

  async componentDidMount() {
    this.fetchData();
  }



  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
          <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.sidebar}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </div>
        <div className={styles.cards}>
          <Cards country={country} data={data} />
        </div>
        <div className={styles.main}>
          <Chart country={country} data={data} />
        </div>
      </div>
    )
  }
}

export default App
