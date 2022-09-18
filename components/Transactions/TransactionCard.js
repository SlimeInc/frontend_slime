import styles from "./Transactions.module.scss";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

const TransactionCard = ({ data }) => {
  const credit = `You received ${data.amount} at ${data.date}`;
  const debit = `You sent ${data.amount}  at  ${data.date}`;
  return (
    <div className={styles.trans_card}>
      <div className={styles.dir}>
        {data.receiving ? (
          <FaArrowCircleDown color="green" size={20} />
        ) : (
          <FaArrowCircleUp color="red" size={20} />
        )}
      </div>
      <div className={styles.detail}>
        <div className={styles.column1}>
          <div className={styles.top}>
            {data.amount} {data.tokens}
          </div>
          <div className={styles.bot}>
            {data.receiving ? <div>Received</div> : <div>Sent</div>}
          </div>
        </div>
        <div className={styles.time}>4 hours ago</div>
      </div>
    </div>
  );
};

export default TransactionCard;
