import styles from "./Transactions.module.scss";

const TransactionHead = () => {
  return (
    <form className={styles.trans_head}>
      <input type="search" placeholder="filter by" />
      <div className={styles.sort_div}>
        <label htmlFor="sort_by">Sort by</label>
        <select id="sort_by" name="sort_by" className={styles.sort_by}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </form>
  );
};

export default TransactionHead;
