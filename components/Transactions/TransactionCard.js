import styles from "../components/Transactions.module.scss";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

const TransactionCard = ({ data }) => {
  const credit = `You received ${data.amount} at ${data.date}`;
  const debit = `You sent ${data.amount}  at  ${data.date}`;
  return (
    <div className={styles.trans_card}>
      {data.brief && data.receiving ? (
        <>
          {" "}
          <div className={styles.top}>
            <div>
              <FaArrowCircleDown /> Received
            </div>{" "}
            <div>{data.date} hours ago</div>
          </div>
          <div className={styles.bot}>
            {data.amount} <span>{data.tokens}</span> from{" "}
            <span>{data.address}</span>{" "}
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className={styles.top}>
            <div>
              <FaArrowCircleUp /> Sent
            </div>{" "}
            <div>{data.date}</div>
          </div>
          <div className={styles.bot}>
            {data.amount} <span>{data.tokens}</span> to {data.address}
          </div>
        </>
      )}
    </div>
  );
};

export default TransactionCard;
