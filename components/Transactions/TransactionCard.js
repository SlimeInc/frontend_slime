import styles from "./Transactions.module.scss";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext"; 

const TransactionCard = ({ data }) => {
  const {currentAccount} = useContext(TransactionContext)
 const receiving = data?.addressFrom === currentAccount
  return (
    <div className={styles.trans_card}>
    
      {console.log(data)}
      <div className={styles.dir}>
        {!receiving ? (
          <FaArrowCircleDown color="green" size={20} />
        ) : (
          <FaArrowCircleUp color="red" size={20} />
        )}
      </div>
      <div className={styles.detail}>
        <div className={styles.column1}>
          <div className={styles.top}>
            {data?.amount} GoerliETH
          </div>
          <div className={styles.bot}>
            {!receiving ? <div>Received</div> : <div>Sent</div>}
          </div>
        </div>
        <div className={styles.time}>{data?.timestamp}</div>
      </div>
    </div>
  );
};

export default TransactionCard;
