import React from "react";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { recovered, confirmed, deaths, lastUpdate } }) => {

  if (!confirmed) {
    return "Loading...";
  }

  return (
    <ul className={styles.list}>
      <li className={cx(styles.card, styles.infected)}>
        <h2 className={styles.title}>Infected</h2>
        <h3>
          <CountUp
            start={0}
            end={confirmed.value}
            duration={2.5}
            separator=","
          />
        </h3>
        <p>Total number of infected</p>
        <small>Last Update: {new Date(lastUpdate).toDateString()}</small>
      </li>
      <li className={cx(styles.card, styles.recovered)}>
        <h2 className={styles.title}>Recovered</h2>
        <h3>
          <CountUp
            start={0}
            end={recovered.value}
            duration={2.5}
            separator=","
          />
        </h3>
        <p>Total number of recoveries</p>
        <small>Last Update:  {new Date(lastUpdate).toDateString()}</small>
      </li>
      <li className={cx(styles.card, styles.deaths)}>
        <h2 className={styles.title}>Deaths</h2>
        <h3>
          <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
        </h3>
        <p>Total number of deaths</p>
        <small>Last Update:  {new Date(lastUpdate).toDateString()}</small>
      </li>
    </ul>
  );
};

export default Cards;
