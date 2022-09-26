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
          onClick={() => {
            console.log(transType.all);
            settransType({ received: false, sent: false, all: true });
          }}
          style={{
            backgroundColor: transType.all ? "#366a8d" : "#fff",
            color: transType.all ? "#fff" : "#817f7f",

            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          All
        </motion.div>
        <motion.div
          className={styles.toggle_coin}
          onClick={() =>
            settransType({ sent: false, all: false, received: true })
          }
          style={{
            backgroundColor: transType.received ? "#366a8d" : "#fff",
            color: transType.received ? "#fff" : "#817f7f",

            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          Received
        </motion.div>
        <motion.div
          className={styles.toggle_coin}
          onClick={() =>
            settransType({ received: false, all: false, sent: true })
          }
          style={{
            backgroundColor: transType.sent ? "#366a8d" : "#fff",
            color: transType.sent ? "#fff" : "#817f7f",

            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
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
