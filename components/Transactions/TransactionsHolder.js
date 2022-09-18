import styles from "./Transactions.module.scss";
const TransactionsHolder = ({ children }) => {
  return <div className={styles.trans_holder}>{children}</div>;
};

export default TransactionsHolder;
