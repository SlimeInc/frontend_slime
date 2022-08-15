import styles from "../styles/Home.module.scss";

const Article = ({ children }) => {
  return <article className={styles.Message}>{children}</article>;
};

export default Article;
