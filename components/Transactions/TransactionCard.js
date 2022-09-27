import styles from "./Transactions.module.scss";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

const TransactionCard = ({ data }) => {

  return (
    <div className={styles.trans_card}>
    
      {console.log(data)}
      <div className={styles.dir}>
        {data?.receiving ? (
          <FaArrowCircleDown color="green" size={20} />
        ) : (
          <FaArrowCircleUp color="red" size={20} />
        )}
      </div>
      <div className={styles.detail}>
        <div className={styles.column1}>
          <div className={styles.top}>
            {data?.amount} {data?.tokens}
          </div>
          <div className={styles.bot}>
            {data?.receiving ? <div>Received</div> : <div>Sent</div>}
          </div>
        </div>
        <div className={styles.time}>4 hours ago</div>
      </div>
    </div>
  );
};

export default TransactionCard;
