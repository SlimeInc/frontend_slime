import React from "react";
import styles from "../styles/Home.module.scss";

export const TeamMember = ({ src, name, about, children }) => {
  return <div className={styles.teamMember}>{children}</div>;
};
