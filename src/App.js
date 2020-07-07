import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './components/'
import styles from './App.module.css'
import { fetchData } from './api'


export class App extends Component {

  state = {
    data: {},
  }



  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <CountryPicker />
        </div>
        <div className={styles.header}>
          <Cards data={data} />
        </div>
        <div className={styles.main}>
          <Chart />
        </div>
      </div>
    )
  }
}

export default App
