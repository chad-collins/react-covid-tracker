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
        <h2>Infected</h2>
        <h5>
          <CountUp
            start={0}
            end={confirmed.value}
            duration={2.5}
            separator=","
          />
        </h5>
        <small>{new Date(lastUpdate).toDateString()}</small>
        <p>body</p>
      </li>
      <li className={cx(styles.card, styles.recovered)}>
        <h2>Recovered</h2>
        <h5>
          <CountUp
            start={0}
            end={recovered.value}
            duration={2.5}
            separator=","
          />
        </h5>
        <small>{new Date(lastUpdate).toDateString()}</small>
        <p>Number of Recoveries</p>
      </li>
      <li className={cx(styles.card, styles.deaths)}>
        <h2>Deaths</h2>
        <h5>
          <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
        </h5>
        <small>{new Date(lastUpdate).toDateString()}</small>
        <p>Number of deaths</p>
      </li>
    </ul>
  );
};

export default Cards;
