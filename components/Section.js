import styles from "../styles/Home.module.scss";

const Section = ({ children }) => {
  return <div className={styles.Fsection}>{children}</div>;
};

export default Section;
