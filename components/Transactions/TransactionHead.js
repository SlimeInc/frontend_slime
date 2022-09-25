import styles from "./Transactions.module.scss";
import { VscSearch } from "react-icons/vsc";

const TransactionHead = () => {
  function ChooseAll() {}
  function ChooseNewest() {}
  function ChooseOldest() {}
  function ChooseSent() {}
  function ChooseReceived() {}
  return (
    <div className={styles.trans_head}>
      <form className={styles.trans_form}>
        {" "}
        <input type="search" placeholder="Search Address" />
        <button>
          {" "}
          <VscSearch />
        </button>
      </form>

      <div className={styles.sort_div}>
        <div className={styles.toggle_coin} onClick={ChooseAll}>
          All
        </div>
        <div className={styles.toggle_coin} onClick={ChooseReceived}>
          Received
        </div>
        <div className={styles.toggle_coin} onClick={ChooseSent}>
          Sent
        </div>
        <div className={styles.toggle_coin} onClick={ChooseOldest}>
          Oldest
        </div>
        <div className={styles.toggle_coin} onClick={ChooseNewest}>
          Newest
        </div>
      </div>
    </div>
  );
};
// today ,  oldest , newest , received , sent
export default TransactionHead;
