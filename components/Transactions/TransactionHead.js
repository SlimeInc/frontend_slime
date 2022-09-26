import styles from "./Transactions.module.scss";
import { VscSearch } from "react-icons/vsc";
import { motion } from "framer-motion";

const TransactionHead = ({ transType, settransType }) => {
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
        <motion.div
          className={styles.toggle_coin}
          onClick={() =>
            settransType({ received: false, sent: false, all: true })
          }
          // style={{
          //   color: props.transType["all"] ? ": #366a8d" : "#fff",
          //   opacity: IsInview ? 1 : 0,
          //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          // }}
        >
          All
        </motion.div>
        <motion.div
          className={styles.toggle_coin}
          onClick={() =>
            settransType({ sent: false, all: false, received: true })
          }
        >
          Received
        </motion.div>
        <motion.div
          className={styles.toggle_coin}
          onClick={() =>
            settransType({ received: false, all: false, sent: true })
          }
        >
          Sent
        </motion.div>
        <div className={styles.toggle_coin} onClick={() => settransType}>
          Oldest
        </div>
        <div className={styles.toggle_coin} onClick={() => settransType}>
          Newest
        </div>
      </div>
    </div>
  );
};
// today ,  oldest , newest , received , sent
export default TransactionHead;
