import React from "react";
import styles from './Account.module.scss'

const StatsCard = ({ name, children }) => {
  return (
    <div className={styles.stats_card}>
      <h4>total assets {name}</h4>
      <h2>{children}</h2>
    </div>
  );
};

export default StatsCard;
